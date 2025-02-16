'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const trocarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={`${styles.header} ${menuAberto ? styles.headerExpandido : ''}`}>

            <div className={`${styles.logoDiv} ${menuAberto ? styles.esconderLogo : ''}`}>
                <Image className={styles.logo} src ='/images/logo.png' alt="logo" width={110} height={90}></Image>
            </div>

            <div className={styles.menuLeft}>
                <button className={styles.menuIcon} onClick={trocarMenu} style={{ transform: menuAberto ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {menuAberto ? '✖' : '☰'}
                </button>
            </div>

            <nav className={`${styles.nav} ${menuAberto ? styles.mostrarMenu : ''}`}>
            <ul className={styles.menu}>
                <li className={styles.itemMenu}>
                    <Link href="/">Home</Link>
                </li>

                <li className={styles.itemMenu}>Médicos
                    <ul className={styles.submenu}>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="/medicos/listar">Listar</Link>
                        </li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Adicionar</Link>
                        </li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Editar</Link>
                        </li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Excluir</Link>
                        </li>
                    </ul>
                </li>

                <li className={styles.itemMenu}>Pacientes
                    <ul className={styles.submenu}>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="/pacientes/listar">Listar</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Adicionar</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Editar</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Excluir</Link></li>
                    </ul>
                </li>

                <li className={styles.itemMenu}>Agendamentos
                    <ul className={styles.submenu}>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="/consultas/listar">Listar Consultas</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Agendar Consultas</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Editar Agendamento</Link></li>
                        <li className={styles.itemSubmenu}>
                            <Link className={styles.linkSubmenu} href="">Cancelar</Link></li>
                    </ul>
                </li>
            </ul>

            </nav>
        </header>
    )
}