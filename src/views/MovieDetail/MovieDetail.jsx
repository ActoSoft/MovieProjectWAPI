import { useState, useEffect } from 'react'
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

    useEffect(() => {
        setLoading(true)
        axios.get(`${API_URL}/movies/${movieId}`)
            .then(response => {
                const movie = response.data.data
                setMovie(movie)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [movieId])

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

    return (
        <>
        {!loading ?
            <MovieDetailUI
                movie={movie}
                handleDeleteMovie={handleDeleteMovie}
            />
            : <p>Cargando datos de la película</p>

    }
        </>
    )
}

export default MovieDetail