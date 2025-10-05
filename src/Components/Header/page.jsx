import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.logoText}>Mundo Monster</p>
                <div className={styles.ImageContainer}>
                    <img src="/Images/iconCaveira.png" alt="icon caveira" className={styles.logoImage}/>
                </div>
            </div>
            <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Home</a>
                <a href="/Personagens" className={styles.navLink}>Personagens</a>
                <a href="/Filmes" className={styles.navLink}>Filmes</a>
                <a href="/Sobre" className={styles.navLink}>Sobre </a>
                <a href="/Contato" className={styles.navLink}>Contato</a>
            </nav>
        </header>
    );
};