import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components';

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // fetch('http://react-couse-actosoft-api.actosoft.com.mx/movies')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data.data);
    //   setMovies(data.data);
    // })
    // .catch(error => console.log(error))
    setLoading(true)
    axios.get('http://react-couse-actosoft-api.actosoft.com.mx/movies')
      .then(res => {
        const { data } = res.data;
        console.log(data);
        setMovies(data);
        setLoading(false)
      })
      .catch(error => console.log(error))

  }, [])

  return(
    <div>
      <h1>K p2 mundo</h1>
      {!loading ? movies.map(movie =>
       <MovieCard
          title={movie.title}
          img={movie.img}
          description={movie.description}
          durationMinutes={movie.durationMinutes}
        />
      ): <p>Cargando datos...</p>}
    </div>
  );
};

export default Home;