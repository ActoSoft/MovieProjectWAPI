import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import MovieDetailUI from '../../components/MovieDetailUI'
import { API_URL } from '../../constants'

const movieInitialState = {
    title: null,
    img: null,
    description: null,
    durationMinutes: null,
    characters: []
}

function MovieDetail (props) {
    const history = useHistory()
    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState(movieInitialState)

    const getMovie = useCallback(
        () => {
        axios.get(`${API_URL}/movies/${movieId}`)
            .then(response => {
                const movie = response.data.data
                setMovie(movie)
                setLoading(false)
            })
            .catch(err => console.log(err))
        },
        [movieId]
    )

    useEffect(() => {
        setLoading(true)
        getMovie()
    }, [getMovie])

    const handleDeleteMovie = () => {
        if (window.confirm('¿Estás seguro de querer eliminar esta película?')) {
            axios.delete(`${API_URL}/movies/${movieId}`)
                .then(response => {
                    console.log(response)
                    alert('Película eliminada correctamente')
                    setTimeout(() => history.push('/movies/'), 2000)
                })
                .catch(err => console.log(err))
        }
    }

    const handleDeleteCharacter = (characterId) => {
        if (window.confirm('¿Estás seguro de querer eliminar esta personaje?')) {
            axios.delete(`${API_URL}/movies/${movieId}/characters/${characterId}`)
                .then(response => {
                    console.log(response)
                    alert('Personaje eliminado correctamente')
                    getMovie()
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
        {!loading ?
            <MovieDetailUI
                movie={movie}
                handleDeleteMovie={handleDeleteMovie}
                handleDeleteCharacter={handleDeleteCharacter}
            />
            : <p>Cargando datos de la película</p>

    }
        </>
    )
}

export default MovieDetail