const MovieCard = ({title, img, description, durationMinutes}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={`Foto de la pelicula: ${title}`}/>
      <p>Sinopsis: {description}</p>
      <p>Duración en minutos: {durationMinutes}</p>
    </div>
  )
}

export default MovieCard;
