import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <Link to="/HomePage">Home </Link>
    <Link to="/CinemaPage">   Cinemas </Link>
    <Link to="/MovieListepage">   My favorite movies </Link>
    <Link to="/AddMoviePage">   Addmovie</Link>
  </nav>
);

export default NavBar;
