import { Movies } from "../../types"
import MovieComp from "./CinemaMovie"

interface CinemaProps {
  name: string;
  movies: Movies[];
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
