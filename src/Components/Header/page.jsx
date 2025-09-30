import React from 'react';
import styles from './Header.module.css'; 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Mundo Monster</div>
            <nav className={styles.nav}>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#personagens" className={styles.navLink}>Personagens Principais</a>
                <a href="#filmes" className={styles.navLink}>Filmes</a>
                <a href="#sobre" className={styles.navLink}>Sobre </a>
                <a href="#contato" className={styles.navLink}>Contato</a>
            </nav>
        </header>
    );
};

export default Header;