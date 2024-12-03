interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  image?: string;
  description?: string;
  budget?: number;
}

type NewMovie = Omit<Movie, "id">;

interface MoviesContext {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  addMovie: (newMovie: NewMovie) => void;
}

export type { Movie as Movies, NewMovie, MoviesContext };
