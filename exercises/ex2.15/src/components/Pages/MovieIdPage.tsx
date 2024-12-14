import { useMatch, useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";
import MovieCard from "../MovieCard";

const MovieIdPage = () => {
    const {movies}: MoviesContext = useOutletContext();

    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id);

    if (isNaN(movieId)) return <p>Movie not found</p>;

    const foundMovie = movies.find((movies) => movies.id === movieId);

    if(!foundMovie) return <p>Movie not found</p>

    return (
        <MovieCard movie={foundMovie} />
    );
};

export default MovieIdPage;