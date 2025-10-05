// page.jsx
import React from 'react'
import Header from '../Components/Header/page.jsx'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.greetingsSection}>
          <h1 className={styles.title}>Mundo Monster</h1>
          <h2 className={styles.subtitle}>Bem-vindo ao mundo Monster</h2>
          <p className={styles.description}>
            Explore personagens fabulosos, descubra filmes incríveis e mergulhe no universo Monster High!
          </p>
        </div>
      </section>
    </div>
  )
}
