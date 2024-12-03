import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import './App.css';
import NavBar from "../NavBar";
import { Movies, MoviesContext } from "../../types";
import { useState } from "react";
import { NewMovie } from "../../types";

const defaultMovies: Movies[] = [
  {
    id: 1,
    title: "Hunger games",
    director: "Aureya BM",
    duration: 150,
    image: "https://fr.web.img3.acsta.net/pictures/15/10/01/10/16/256927.jpg",
    description:
      "Après que sa soeur a été sélectionnée pour participer aux violents 'Hunger Games',' Katniss Everdeen décide de se porter volontaire pour libérer sa soeur de son fardeau. La jeune femme et son comparse du District 12, Peeta, devront affronter 22 autres adolescents ayant entre 12 et 18 ans, jusqu'à la mort",
    budget: 78,
  },

  {
    id: 2,
    title: "THE HATE U GIVE",
    director: "ROONEY",
    duration: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEsz9AP4q8jgtISoQaEFN39HOCpJ-87rsjA&s",
    description:
      "Starr Carter alterne entre deux mondes -- le quartier pauvre de son enfance où elle habite et son école riche. L'équilibre entre ces deux mondes est rapidement brisé lorsqu'elle est témoin de l'assassinat fatal de son meilleur ami d'enfance par un agent de police",
    budget: 23,
  },
];

const App = () => {
  const [movies, setMovies] = useState(defaultMovies);

  const addMovie = (newMovie: NewMovie) => {
    const addedMovie = {
      id: nextFilmId(movies),
      title: newMovie.title,
      director: newMovie.director,
      duration: newMovie.duration,
      image: newMovie.image,
    };
    setMovies([...movies, addedMovie]);
  }

  const fullMoviesContext : MoviesContext = {
    movies,
    setMovies,
    addMovie,
  }

  return (
    <div>
    <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
      <h1>Tous sur les films</h1>
      <NavBar />  
    </Header>
    <main>
      <Outlet  context={fullMoviesContext}/>
    </main>
    <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
  </div>
  );
};


function nextFilmId(movies: Movies[]) {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
}

export default App;
