"use client"
import React from 'react'
import Header from '@/Components/Header/page.jsx'
import Footer from '@/Components/Footer/page.jsx'
import styles from './sobre.module.css'

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Sobre</h1>
                <main className={styles.main}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sobre Mim</h2>
                        <p className={styles.text}>
                            Meu nome é Sarah Ribeiro Barros, tenho 17 anos e sou estudante de Desenvolvimento de Sistemas no SENAI Valinhos. Atualmente estou desenvolvendo um projeto que conecta back-end e front-end, utilizando uma API dedicada ao universo de Monster High. Esse trabalho faz parte do meu aprendizado e também reflete meu interesse em unir tecnologia com temas criativos e divertidos.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sobre Monster High</h2>
                        <p className={styles.text}>
                            Monster High é uma franquia criada pela Mattel que combina moda, amizade e diversidade em um universo único. A história acompanha filhos e filhas de monstros famosos, como Drácula, Lobisomem e a Criatura da Lagoa, que frequentam a escola Monster High. Cada personagem traz sua personalidade, estilo e desafios, promovendo mensagens de inclusão, aceitação das diferenças e valorização da individualidade. A franquia conta com bonecas, filmes e animações que conquistaram fãs no mundo todo.

                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sobre o Projeto</h2>
                        <p className={styles.text}>
                            O Mundo Monster é um projeto desenvolvido com o objetivo de reunir, em um só lugar, informações sobre o universo de Monster High. A aplicação apresenta detalhes sobre os personagens principais e explora os filmes da franquia, oferecendo sinopses, curiosidades e dados relevantes.

                            Além de servir como uma fonte de informação para fãs, o projeto também é uma oportunidade de aprendizado e prática no desenvolvimento de sistemas, unindo front-end, back-end e o uso de APIs. O *Mundo Monster* busca proporcionar uma experiência divertida e intuitiva para os usuários, reforçando valores importantes da franquia, como diversidade, amizade e aceitação.

                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}
