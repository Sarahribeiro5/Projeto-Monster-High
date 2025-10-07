"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Header from '../../../Components/Header/page'
import Footer from '../../../Components/Footer/page'
import styles from './personagensDetails.module.css'

export default function PersonagensDetails() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/personagens/${id}`)
                setCharacter(response.data)
            } catch (error) {
                console.error("Erro ao buscar personagem:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchCharacter()
    }, [id])

    if (loading) return <p className={styles.loading}>Carregando personagem...</p>
    if (!character) return <p className={styles.loading}>Personagem não encontrado.</p>

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainSection}>
                <h1 className={styles.title}>{character.nome}</h1>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={character.imagem} alt={character.nome} className={styles.characterImage} />
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.description}>
                            <strong className={styles.strong}>Idade:</strong>
                            <p className={styles.detail}>{character.idade}</p>
                        </div>
                        <div className={styles.description}>
                            <strong className={styles.strong}>Características:</strong>
                            <p className={styles.detail}>{character.características}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
