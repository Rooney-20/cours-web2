import { useState } from "react";
import {Movies} from "../../types";


interface MovieProps {
  movie: Movies;
}

const MovieComp = ({ movie }: MovieProps) => {
    const [afficheDes, setAfficheDes] = useState(false);

    const handleClick = () => {
        setAfficheDes(!afficheDes);
    }

  return (
    <li onClick={handleClick} >
      <strong>{movie.title}</strong>
       - Réalisateur : {movie.director}
      {afficheDes ? <p>{movie.description}</p> : null }
      <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
    </li>
  );
};

export default MovieComp;
