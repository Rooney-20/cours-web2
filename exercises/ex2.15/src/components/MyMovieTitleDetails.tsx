import { Link } from "react-router-dom";
import { Movies } from "../types"

interface MovieTitleDetailsProps {
  movie: Movies[];
}

const MyMovieTitleDetails = ({ movie }: MovieTitleDetailsProps) => {
    return (
         <ul>
            {movie.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
         </ul>
    )
}

export default MyMovieTitleDetails;