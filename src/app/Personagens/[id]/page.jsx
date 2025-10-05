"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Header from '../../../Components/Header/page'
import Footer from '../../../Components/Footer/page'
import styles from './personagensDetails.module.css'

export default function PersonagemDetails() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/personagens/${id}`)
                setCharacter(response.data)
            } catch (error) {
                console.error('Erro ao buscar personagem:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchCharacter()
    }, [id])

    if (loading) return <p className={styles.loading}>Carregando personagem...</p>
    if (!character) return <p className={styles.loading}>Personagem não encontrado.</p>

    return (
        <div className={styles.personagens}>
            <Header />
            <div className={styles.characterPage}>
                <div className={styles.introSection}>
                    <h1 className={styles.title}>{character.nome}</h1>
                    <p className={styles.description}>{character.descricao}</p>
                </div>

                <div className={styles.charactersGrid}>
                    <div className={styles.characterCard} style={{ backgroundImage: `url(${character.imagem})` }}>
                        <div className={styles.characterName}>{character.nome}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
