import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import './styles.css';

const MovieList = (props) => {

	const history = useHistory()
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('https://react-couse-actosoft-api.actosoft.com.mx/movies')
      .then(res => {
        const { data } = res.data;
        setMovies(data);
        setLoading(false)
      })
      .catch(error => console.log(error))

  }, [])

  const handleShowMovieDetail = (id) => {
    props.history.push(`/movies/${id}`)
	}

	const handleGoToAddMovie = () => {
		history.push('/movies/add');
	}

  return(
    <div className='movieList-container'>
      <div className="movieList-title-container">
					<h1>Lista de películas</h1>
					<button className="go-to-add-movie-button" onClick={handleGoToAddMovie}>
						Agregar película
					</button>
			</div>
			<div className="movie-cards-container">
				{!loading ? movies.map(movie =>
				<MovieCard
						onClick={handleShowMovieDetail}
						key={movie._id}
						movie={movie}
					/>
				): <p>Cargando datos...</p>}
			</div>
    </div>
  );
};

export default MovieList;