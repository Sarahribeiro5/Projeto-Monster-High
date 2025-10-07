"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Header from '../../Components/Header/page'
import Footer from '../../Components/Footer/page'
import styles from './filmes.module.css'

export default function Filmes() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const searchForMovies = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:5000/filmes')
            setMovies(response.data)
        } catch (error) {
            console.error('Erro ao buscar filmes:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCardClick = (id) => {
        if (id === undefined || id === null) {
            console.warn('handleCardClick chamado sem id válido:', id)
            return
        }
        router.push(`/Filmes/${encodeURIComponent(id)}`)
    }

    const handleCardKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick(id)
        }
    }

    return (
        <div className={styles.filmes}>
            <Header />
            <div className={styles.moviesPage}>
                <div className={styles.introSection}>
                    <h1 className={styles.title}>Filmes - Monster High</h1>
                    <p className={styles.description}>Explore todos os filmes da franquia Monster High.</p>
                    <button className={styles.loadButton} onClick={searchForMovies} disabled={loading}>
                        {loading ? "Carregando..." : "Buscar Filmes"}
                    </button>
                </div>

                <div className={styles.moviesGrid}>
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <div
                                key={movie.id}
                                className={styles.movieCard}
                                role="button"
                                tabIndex={0}
                                style={{ backgroundImage: `url(${movie.imagem || movie.imgUrl || ''})` }}
                                onClick={() => handleCardClick(movie.id)}
                                onKeyDown={(e) => handleCardKeyDown(e, movie.id)}
                            >
                                <div className={styles.movieName}>{movie.titulo || movie.title}</div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>
                            {loading ? "Carregando filmes..." : "Clique no botão para carregar os filmes!"}
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
