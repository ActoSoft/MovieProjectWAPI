import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
// import './styles.css';
import {
  MovieListContainer,
  MovieListTitleContainer,
  ListContainerTitle,
  GoToAddMovieButton,
  MovieCardsContainer,
  Paragraph
} from './MovieList.styled';


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
    <MovieListContainer>
      <MovieListTitleContainer>
					<ListContainerTitle>Lista de películas</ListContainerTitle>
					<GoToAddMovieButton onClick={handleGoToAddMovie}>
						Agregar película
					</GoToAddMovieButton>
			</MovieListTitleContainer>
			<MovieCardsContainer>
				{!loading ? movies.map(movie =>
				<MovieCard
						onClick={handleShowMovieDetail}
						key={movie._id}
						movie={movie}
					/>
				): <Paragraph>Cargando datos...</Paragraph>}
			</MovieCardsContainer>
    </MovieListContainer>
  );
};

export default MovieList;