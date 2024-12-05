import PageTitle from "../PageTitle";
import { useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";
import MyMovieTitleDetails from "../MyMovieTitleDetails";

const HomePage = () => {
    const{ movies } : MoviesContext = useOutletContext();

    return (
        <div>
            <PageTitle title="Welcome to iMovie" />
            <p>
                My favorite Movies Title
            </p> <br />
            <MyMovieTitleDetails movie={movies} />
        </div>
    );
}

export default HomePage;