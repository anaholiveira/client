"use client"
import { useEffect, useState } from 'react'
import styles from "./listar.module.css"

export default function ListarMedicos() {
    const [medicos, setMedicos] = useState([])
    const [mostrarInput, setMostrarInput] = useState(false)
    const [busca, setBusca] = useState('')
    const [carregando, setCarregando] = useState(true)

    async function listarMedicos() {
        setCarregando(true)
        try {
            let response = await fetch('https://api-clinica-2a.onrender.com/medicos')
            let data = await response.json()
            setMedicos(data)

        } catch (error) {
            console.error('Erro ao buscar médicos')
        }
        setCarregando(false)
    }

    useEffect(() => {
        listarMedicos()
    }, [])

    let medicosAchados = medicos.filter(medico =>
        medico.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <div>
            <h1 className={styles.titulo}>Lista de Médicos</h1>

            <section className={styles.secaoTabela}>

            <button className={styles.buttonBuscar} onClick={() => setMostrarInput(!mostrarInput)}>
                {mostrarInput ? 'Fechar Busca' : 'Buscar Médico'}
            </button>

            {mostrarInput && (
                <input
                    type = "text"
                    className={styles.inputBuscar}
                    placeholder = "Digite o nome do médico"
                    value = {busca}
                    onChange = {(e) => setBusca(e.target.value)}
                />
            )}

            {carregando && <p className={styles.msgCarregando}>Carregando médicos...</p>}

            
                {!carregando && medicosAchados.length === 0 && (
                    <p className={styles.msgNaoEncontrado}>Nenhum médico encontrado.</p>
                )}

                {!carregando && medicosAchados.length > 0 && (
                    <table className={styles.tableMedicos}>

                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Especialidade</th>
                            </tr>
                        </thead>

                        <tbody className={styles.tbody}>
                            {medicosAchados.map(medico => (
                                <tr className={styles.tr} key={medico.id}>
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    )
}
