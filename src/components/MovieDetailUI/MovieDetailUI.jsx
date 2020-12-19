import CharacterCard from '../CharacterCard'
import { useHistory } from 'react-router-dom'
import './styles.css'

const MovieDetailUI = ({ movie, handleDeleteMovie }) => {
    const history = useHistory()
    const hasCharacters = characters => {
        return characters.length > 0
    }

    const handleGoToEditMovie = () => {
        history.push(`/movies/${movie._id}/edit`)
		}

	const handleGoToMovieList = () => {
		history.push('/movies')
	}

    return (
        <>
            <div className="detail-movie-title-container">
								<h1>Detalle la pelicula: {movie.title}</h1>
								<button onClick={handleGoToEditMovie}>Editar película</button>
								<button className="button-red" onClick={handleDeleteMovie}>Eliminar película</button>
								<button onClick={handleGoToMovieList}>Regresar a la lista de películas</button>
						</div>
            <div className="detail-movie-data-container">
								<img src={movie.img} alt={movie.title}/>
								<p><strong>Descripción:</strong> {movie.description}</p>
								<p style={{borderBottom: '2px dotted gray', paddingBottom: '10px'}}><strong>Duración (min):</strong> {movie.durationMinutes}</p>

								<h2>Personales de la película</h2>
								<div className="characters-container">
										{hasCharacters(movie.characters) ?
												movie.characters.map(character =>
														<CharacterCard
																key={character._id}
																character={character}
														/>
												)
										: <p>No hay personajes registrados</p>
										}
								</div>
						</div>
        </>
    )
}

export default MovieDetailUI