import CharacterCard from '../CharacterCard'
import { useHistory } from 'react-router-dom'

const MovieDetailUI = ({ movie }) => {
    const history = useHistory()
    const hasCharacters = characters => {
        return characters.length > 0
    }

    const handleGoToEditMovie = () => {
        history.push(`/movies/${movie._id}/edit`)
    }

    return (
        <>
            <h1>Detalle la pelicula: {movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <p>Descripción: {movie.description}</p>
            <p>Duración (min): {movie.durationMinutes}</p>

            <h3>Personales de la película</h3>
            {hasCharacters(movie.characters) ?
                movie.characters.map(character =>
                    <CharacterCard
                        key={character._id}
                        character={character}
                    />
                )
            : <p>No hay personajes registrados</p>
            }
        <button onClick={handleGoToEditMovie}>Editar película</button>
        </>
    )
}

export default MovieDetailUI