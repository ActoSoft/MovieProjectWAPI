import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants'
import { useHistory, useParams } from 'react-router-dom'
import './styles.css'

const initialState = {
    name: '',
    img: '',
    biography: '',
}

const CharacterForm = () => {

    const history = useHistory()
    const { movieId, characterId } = useParams()

    const [characterData, setCharacterData] = useState(initialState)
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (characterId) {
            axios.get(`${API_URL}/movies/${movieId}`)
            .then(response => {
                handleFindCharacterInMovie(response.data.data, characterId)
                setIsUpdating(true)
            })
            .catch(err => console.log(err))
        }
    }, [characterId, movieId])

    const handleFindCharacterInMovie = (movie, characterId) => {
        const character = movie.characters.find(character => character._id === characterId)
        if (character) {
            setCharacterData(character)
        } else {
            alert('No existe el personaje especificado')
        }
    }

    const handleChangeCharacterData = (event) => {
        setCharacterData({
            ...characterData,
            [event.target.name]: event.target.value
        })
    }

    const handleAddOrEditCharacter = () => {
        let request
        if (isUpdating) {
            request = axios.put(`${API_URL}/movies/${movieId}/characters/${characterId}`, characterData)
        } else {
            request = axios.post(`${API_URL}/movies/${movieId}/characters`, characterData)
        }
        request
            .then(response => {
                console.log(response)
                alert(`Personaje ${isUpdating ? 'actualizado' : 'creado'} correctamente`)
                setTimeout(() => history.push(`/movies/${movieId}`), 1500)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <>
            <div className="character-form-title-container">
								<h2>{isUpdating ?
										'Edita el personaje' :
										'Agregar un nuevo personaje'}</h2>
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
                onClick={handleAddOrEditCharacter}
            >
                {isUpdating ? 'Actualizar' : 'Agregar'} personaje
            </button>
        </>
    )
}

export default CharacterForm