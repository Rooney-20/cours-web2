import Movie from "../../types"
import MovieComp from "../MovieComp/MovieComp";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({name , movies}: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <MovieComp key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
