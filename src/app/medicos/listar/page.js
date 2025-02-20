'use client';
import { useEffect, useState } from 'react';
import styles from "./page.module.css";

export default function ListarMedicos() {
    const [medicos, setMedicos] = useState([]);

    const listarMedicos = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
            if (!response.ok) {
                throw new Error('Erro ao buscar médicos');
            }

            const data = await response.json();
            setMedicos(data);
            
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        listarMedicos();
    }, []);

    return (
        <div>

            <h1 className={styles.titulo}>Lista de Médicos</h1>

            <section className={styles.secaoTabela}>

            <button className={styles.buttonBuscar}>Buscar Médico</button>

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
                        {medicos.map(medico => (
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

            </section>

        </div>
    );
}
