import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import './styles.css'

const initialState = {
    name: '',
    img: '',
    biography: '',
}

const CharacterForm = (props) => {

    const history = useHistory()
    const { movieId } = useParams()

    const [characterData, setCharacterData] = useState(initialState)
    const [isUpdating, setIsUpdating] = useState(false)

    // useEffect(() => {
    //     if (movieId) {
    //         axios.get(`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`)
    //         .then(response => {
    //             const movie = response.data.data
    //             setMovieData(movie)
    //             setIsUpdating(true)
    //         })
    //         .catch(err => console.log(err))
    //     }
    // }, [movieId])

    const handleChangeCharacterData = (event) => {
        setCharacterData({
            ...characterData,
            [event.target.name]: event.target.value
        })
    }

    // const handleAddMovie = (event) => {
    //     let request
    //     if (isUpdating) {
    //         request = axios.put(
    //             `https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`,
    //             movieData
    //         )
    //     } else {
    //         request = axios.post(
    //             'https://react-couse-actosoft-api.actosoft.com.mx/movies',
    //             movieData
    //         )
    //     }

    //     request.then(response => {
    //         console.log(response)
    //         const { _id } = response.data.data.movie
    //         alert(`Película ${isUpdating ? 'actualizada' : 'agregada'}`)
    //         setTimeout(() => history.push(`/movies/${_id}`), 3000)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         alert('Arturo hizo mal el bvackend')
    //     })
	// 	}

		const handleGoBack = () => {
			history.goBack()
		}

    return (
        <>
            <div className="character-form-title-container">
								<h2>{isUpdating ?
										'Edita la película' :
										'Agregar una nueva película'}</h2>
								<button onClick={handleGoBack}>Volver</button>
						</div>
            <div className='character-form-container'>
								<span>
										<strong>Nombre: </strong>
										<input
												type="text"
												name='name'
												placeholder='Nombre'
												onChange={handleChangeCharacterData}
												value={characterData.name}
										/>
								</span>
								<span>
										<strong>Url de la imagen: </strong>
										<input
												type="text"
												name='img'
												placeholder='URL de la imagen'
												onChange={handleChangeCharacterData}
												value={characterData.img}
										/>
								</span>
								<span>
									<strong>Biografía: </strong>
										<textarea
												name='biography'
												onChange={handleChangeCharacterData}
												value={characterData.biography}
										/>
								</span>
						</div>
            <button
                className="character-form-confirm-button"
                // onClick={handleAddMovie}
            >
                {isUpdating ? 'Actualizar' : 'Agregar'} personaje
            </button>
        </>
    )
}

export default CharacterForm