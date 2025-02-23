"use client"
import { useEffect, useState } from 'react'
import styles from "./listar.module.css"

export default function ListarConsultas() {
    const [consultas, setConsultas] = useState([])
    const [buscaMedico, setBuscaMedico] = useState('')
    const [buscaPaciente, setBuscaPaciente] = useState('')
    const [mostrarBuscaMedico, setMostrarBuscaMedico] = useState(false)
    const [mostrarBuscaPaciente, setMostrarBuscaPaciente] = useState(false)
    const [carregando, setCarregando] = useState(true)

    async function listarConsultas() {
        setCarregando(true)
        try {
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas')
            let data = await response.json()
            setConsultas(data)
        } catch (error) {
            console.error('Erro ao buscar consultas')
        }
        setCarregando(false)
    }

    useEffect(() => {
        listarConsultas()
    }, [])

    let consultasAchadas = consultas.filter(consulta =>
        (buscaMedico ? consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase()) : true) &&
        (buscaPaciente ? consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase()) : true)
    )

    return (
        <div>
            <h1 className={styles.titulo}>Lista de Consultas</h1>

            <section className={styles.secaoTabela}>
                <div className={styles.filtros}>
                    <button
                        className={styles.buttonBuscar}
                        onClick={() => setMostrarBuscaMedico(!mostrarBuscaMedico)}
                    >
                        {mostrarBuscaMedico ? 'Fechar busca' : 'Buscar Médico'}
                    </button>
                    {mostrarBuscaMedico && (
                        <input
                            type="text"
                            className={styles.inputBuscar}
                            placeholder="Digite o nome do médico"
                            value={buscaMedico}
                            onChange={(e) => setBuscaMedico(e.target.value)}
                        />
                    )}

                    <button
                        className={styles.buttonBuscar}
                        onClick={() => setMostrarBuscaPaciente(!mostrarBuscaPaciente)}
                    >
                        {mostrarBuscaPaciente ? 'Fechar busca' : 'Buscar Paciente'}
                    </button>
                    {mostrarBuscaPaciente && (
                        <input
                            type="text"
                            className={styles.inputBuscar}
                            placeholder="Digite o nome do paciente"
                            value={buscaPaciente}
                            onChange={(e) => setBuscaPaciente(e.target.value)}
                        />
                    )}
                </div>

                {carregando && <p className={styles.msgCarregando}>Carregando consultas...</p>}

                {!carregando && consultasAchadas.length === 0 && (
                    <p className={styles.msgNaoEncontrado}>Nenhuma consulta encontrada.</p>
                )}

                {!carregando && consultasAchadas.length > 0 && (
                    <table className={styles.tableConsultas}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Médico</th>
                                <th className={styles.th}>Especialidade</th>
                                <th className={styles.th}>Paciente</th>
                                <th className={styles.th}>Tipo</th>
                            </tr>
                        </thead>

                        <tbody className={styles.tbody}>
                            {consultasAchadas.map(consulta => (
                                <tr className={styles.tr} key={consulta.id}>
                                    <td className={styles.td}>{consulta.id}</td>
                                    <td className={styles.td}>{consulta.medico}</td>
                                    <td className={styles.td}>{consulta.especialidade}</td>
                                    <td className={styles.td}>{consulta.paciente}</td>
                                    <td className={styles.td}>{consulta.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    )
}
