// contato.jsx
import React from 'react'
import Header from '@/Components/Header/page.jsx'
import styles from './contato.module.css'

export default function Contato() {
    return (
        <div className={styles.contato}>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Entre em Contato</h1>

                <form className={styles.form} action="mailto:sarah.r.barros@aluno.senai.br" method="post" encType="text/plain">
                    <div className={styles.field}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" maxLength={50} required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="5" maxLength={300} required />
                        <small className={styles.limite}>Máximo de 300 caracteres</small>
                    </div>

                    <button type="submit" className={styles.button}>Enviar</button>
                </form>
            </div>
        </div>
    )
}
