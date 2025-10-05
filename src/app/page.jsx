// page.jsx
import React from 'react'
import Header from '../Components/Header/page.jsx'
import Footer from '../Components/Footer/page.jsx'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.greetingsSection}>
          <h1 className={styles.title}>Mundo Monster</h1>
          <h2 className={styles.subtitle}>Bem-vindo ao Mundo Monster</h2>
          <p className={styles.description}>
            Explore personagens fabulosos, descubra filmes incríveis e mergulhe no universo Monster High!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
