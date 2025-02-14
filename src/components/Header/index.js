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
                <Image className={styles.logo} src ='/images/logo.png' alt="logo" width={120} height={100}></Image>
            </div>

            <div className={styles.menuLeft}>
                <button className={styles.menuIcon} onClick={trocarMenu} style={{ transform: menuAberto ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {menuAberto ? '✖' : '☰'}
                </button>
            </div>

            <nav className={`${styles.nav} ${menuAberto ? styles.mostrarMenu : ''}`}>
                <ul className={styles.ul}>
                <li className={styles.gradient}>
                    <Link className={styles.links} href="/">Home</Link>
                </li>
                <li className={styles.gradient}>
                    <Link className={styles.links} href="/medicos">Médicos</Link>
                </li>
                <li className={styles.gradient}>
                    <Link className={styles.links} href="/pacientes">Pacientes</Link>
                </li>
                <li className={styles.gradient}>
                    <Link className={styles.links} href="/consultas">Consultas</Link>
                </li>

                </ul>
            </nav>
        </header>
    )
}