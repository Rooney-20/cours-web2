import {Movies} from "../../types";
import MovieCard from "../MovieCard";

interface MoviesProps {
  movies: Movies[];
}

const MoviesItem = ({ movies }: MoviesProps) => {
  return (
    <div>
      {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
  );
};

export default MoviesItem;
