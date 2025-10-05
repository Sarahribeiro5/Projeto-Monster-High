"use client"
import Link from 'next/link'
import styles from './notfound.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.description}>
        O conteúdo que você está procurando não existe ou foi removido.
      </p>
      <Link href="/">
        <div className={styles.button}>Voltar para a Home</div>
      </Link>
    </div>
  )
}
