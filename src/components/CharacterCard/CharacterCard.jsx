import { useHistory } from 'react-router-dom'
import './styles.css'

const CharacterCard = ({ character, movieId, handleDeleteCharacter }) => {
    const history = useHistory()

    const handleGoToEditCharacter = () => {
        history.push(`/movies/${movieId}/characters/${character._id}/edit`)
    }

    return (
        <div className="character-detail-container">
            <h3>Nombre: {character.name}</h3>
            <img
                src={character.img}
                alt= {character.name}
            />
            <p>Biografía: {character.biography}</p>
            <div className="buttons-container">
                <button onClick={handleGoToEditCharacter}>Editar personaje</button>
                <button onClick={() => handleDeleteCharacter(character._id)} className="button-red">Eliminar personaje</button>
            </div>
        </div>
    )
}

export default CharacterCard