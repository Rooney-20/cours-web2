import { useState } from "react";
import Movie from "../../types";

interface MovieProps {
  movie: Movie;
}

const MovieComp = ({ movie }: MovieProps) => {
    const [afficheDes, setAfficheDes] = useState(false);

    const handleClick = () => {
        setAfficheDes(!afficheDes);
    }

  return (
    <li onClick={handleClick} >
      <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      {afficheDes ? <p>{movie.description}</p> : null }
    </li>
  );
};

export default MovieComp;
