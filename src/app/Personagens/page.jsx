"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Header from '../../Components/Header/page'
import Footer from '../../Components/Footer/page'
import styles from './personagens.module.css'

export default function Personagens() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const searchForCharacters = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:4001/personagens')
            setCharacters(response.data)
        } catch (error) {
            console.error('Erro ao buscar personagens:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCardClick = (id) => {
        if (!id) return
        router.push(`/Personagens/${encodeURIComponent(id)}`)
    }

    const handleCardKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick(id)
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.charactersPage}>
                <div className={styles.introSection}>
                    <h1 className={styles.title}>Personagens - Monster High</h1>
                    <p className={styles.description}>Explore todos os personagens da franquia Monster High.</p>
                    <button className={styles.loadButton} onClick={searchForCharacters} disabled={loading}>
                        {loading ? "Carregando..." : "Buscar Personagens"}
                    </button>
                </div>

                <div className={styles.charactersGrid}>
                    {characters.length > 0 ? (
                        characters.map(character => (
                            <div
                                key={character.id}
                                className={styles.characterCard}
                                role="button"
                                tabIndex={0}
                                style={{ backgroundImage: `url(${character.imagem || ''})` }}
                                onClick={() => handleCardClick(character.id)}
                                onKeyDown={(e) => handleCardKeyDown(e, character.id)}
                            >
                                <div className={styles.characterName}>{character.nome}</div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>
                            {loading ? "Carregando personagens..." : "Clique no botão para carregar os personagens!"}
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
