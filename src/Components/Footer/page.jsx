import React from 'react';
import styles from './footer.module.css';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                &copy; 2025 Mundo Monster | Desenvolvido por <span className={styles.developer}>Sarah Ribeiro</span>
            </p>
        </footer>
    );
};

