import './movieCard.css'

const MovieCard = ({ movie, onClick }) => {
  const { title, img, description, durationMinutes } = movie
  return (
    <div
      className='movieList-item'
      onClick={() => onClick(movie._id)}
    >
      <h3>{title}</h3>
      <img src={img} alt={`Foto de la pelicula: ${title}`}/>
      <p>Sinopsis: {description}</p>
      <p>Duración en minutos: {durationMinutes}</p>
    </div>
  )
}

export default MovieCard;
