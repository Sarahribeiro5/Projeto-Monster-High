"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Header from '../../../Components/Header/page'
import Footer from '../../../Components/Footer/page'
import styles from './filmesDetails.module.css'

export default function FilmesDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/filmes/${id}`)
                setMovie(response.data)
            } catch (error) {
                console.error("Erro ao buscar filme:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovie()
    }, [id])

    if (loading) return <p className={styles.loading}>Carregando filme...</p>
    if (!movie) return <p className={styles.loading}>Filme não encontrado.</p>

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainSection}>
                <h1 className={styles.title}>{movie.titulo}</h1>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={movie.imagem} alt={movie.titulo} className={styles.movieImage} />
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.description}>
                            <strong className={styles.strong}>Sinopse:</strong>
                            <p className={styles.detail}>{movie.sinopse}</p>
                        </div>
                        <div className={styles.description}>
                            <strong className={styles.strong}>Personagens Principais:</strong>
                            <p className={styles.detail}>{movie.personagensPrincipais}</p>
                        </div>
                        <div className={styles.description}>
                            <strong className={styles.strong}>Ano de Lançamento:</strong>
                            <p className={styles.detail}>{movie.dataLancamento}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
