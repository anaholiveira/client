import styles from "./page.module.css";

export default function ListarMedicos() {
    return (
        <div>
            <h1 className={styles.titulo}>Lista de Médicos</h1>

            <section className={styles.secaoTabela}>
                <button className={styles.buttonBuscar}>Buscar Médico</button>

            </section>


        </div>
    )
}