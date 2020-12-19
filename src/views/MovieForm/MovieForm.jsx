import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import './styles.css'

const initialState = {
    title: '',
    img: '',
    description: '',
    durationMinutes: 0
}

const MovieForm = (props) => {

    const history = useHistory()
    const { movieId } = useParams()

    const [movieData, setMovieData] = useState(initialState)
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (movieId) {
            axios.get(`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`)
            .then(response => {
                const movie = response.data.data
                setMovieData(movie)
                setIsUpdating(true)
            })
            .catch(err => console.log(err))
        }
    }, [movieId])

    const handleChangeMovieData = (event) => {
        setMovieData({
            ...movieData,
            [event.target.name]: event.target.value
        })
    }

    const handleAddMovie = (event) => {
        let request
        if (isUpdating) {
            request = axios.put(
                `https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`,
                movieData
            )
        } else {
            request = axios.post(
                'https://react-couse-actosoft-api.actosoft.com.mx/movies',
                movieData
            )
        }

        request.then(response => {
            console.log(response)
            const { _id } = response.data.data.movie
            alert(`Película ${isUpdating ? 'actualizada' : 'agregada'}`)
            setTimeout(() => history.push(`/movies/${_id}`), 3000)
        })
        .catch(error => {
            console.log(error)
            alert('Arturo hizo mal el bvackend')
        })
		}

		const handleGoBack = () => {
			history.goBack()
		}

    return (
        <>
            <div className="movie-form-title-container">
								<h2>{isUpdating ?
										'Edita la película' :
										'Agregar una nueva película'}</h2>
								<button onClick={handleGoBack}>Volver</button>
						</div>
            <div className='movie-form-container'>
								<span>
										<strong>Título: </strong>
										<input
												type="text"
												name='title'
												placeholder='Título'
												onChange={handleChangeMovieData}
												value={movieData.title}
										/>
								</span>
								<span>
										<strong>Url de la imagen: </strong>
										<input
												type="text"
												name='img'
												placeholder='URL de la imagen'
												onChange={handleChangeMovieData}
												value={movieData.img}
										/>
								</span>
								<span>
									<strong>Descripción: </strong>
										<textarea
												name='description'
												onChange={handleChangeMovieData}
												value={movieData.description}
										/>
								</span>
								<span>
										<strong>Duración en minutos: </strong>
										<input
												type="number"
												name='durationMinutes'
												placeholder='Duración (min)'
												onChange={handleChangeMovieData}
												value={movieData.durationMinutes}
										/>
								</span>
						</div>
            <button className="movie-form-confirm-button" onClick={handleAddMovie}>
                {isUpdating ? 'Actualizar' : 'Agregar'} película
            </button>
        </>
    )
}

export default MovieForm