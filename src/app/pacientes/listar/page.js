"use client"
import { useEffect, useState } from 'react'
import styles from "./listar.module.css"

export default function ListarPacientes() {
    const [pacientes, setPacientes] = useState([])
    const [mostrarInput, setMostrarInput] = useState(false)
    const [busca, setBusca] = useState('')
    const [carregando, setCarregando] = useState(true)

    async function listarPacientes() {
        setCarregando(true)
        try {
            let response = await fetch('https://api-clinica-2a.onrender.com/pacientes')
            let data = await response.json()
            setPacientes(data)

        } catch (error) {
            console.error('Erro ao buscar pacientes')
        }
        setCarregando(false)
    }

    useEffect(() => {
        listarPacientes()
    }, [])

    let pacientesAchados = pacientes.filter(paciente =>
        paciente.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <div>
            <h1 className={styles.titulo}>Lista de Pacientes</h1>

            <section className={styles.secaoTabela}>

            <button className={styles.buttonBuscar} onClick={() => setMostrarInput(!mostrarInput)}>
                {mostrarInput ? 'Fechar Busca' : 'Buscar Paciente'}
            </button>

            {mostrarInput && (
                <input
                    type = "text"
                    className={styles.inputBuscar}
                    placeholder = "Digite o nome do paciente"
                    value = {busca}
                    onChange = {(e) => setBusca(e.target.value)}
                />
            )}

            {carregando && <p className={styles.msgCarregando}>Carregando pacientes...</p>}

            
                {!carregando && pacientesAchados.length === 0 && (
                    <p className={styles.msgNaoEncontrado}>Nenhum paciente encontrado.</p>
                )}

                {!carregando && pacientesAchados.length > 0 && (
                    <table className={styles.tablePacientes}>

                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>CPF</th>
                            </tr>
                        </thead>

                        <tbody className={styles.tbody}>
                            {pacientesAchados.map(paciente => (
                                <tr className={styles.tr} key={paciente.id}>
                                    <td className={styles.td}>{paciente.id}</td>
                                    <td className={styles.td}>{paciente.nome}</td>
                                    <td className={styles.td}>{paciente.telefone}</td>
                                    <td className={styles.td}>{paciente.email}</td>
                                    <td className={styles.td}>{paciente.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    )
}
