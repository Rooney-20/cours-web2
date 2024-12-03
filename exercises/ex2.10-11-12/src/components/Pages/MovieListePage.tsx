import '../MoviepageCSS.css';
import MoviesItem from '../MovieListe/Movies';
import { useOutletContext } from 'react-router-dom';
import { MoviesContext } from '../../types';

const MovieListePage = () => {

  const {
    movies,
  } : MoviesContext = useOutletContext();

  return <div>
    <MoviesItem movies={movies} />
  </div>
};


export default MovieListePage;
