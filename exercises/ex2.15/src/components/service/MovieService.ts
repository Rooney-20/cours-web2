import { Movies, NewMovie } from "../../types";


const fetchMovies =  async (): Promise<Movies[]> => {
    try{
        const response = await fetch("api/films");
        if (!response.ok)
            throw new Error(
              "Failed to fetch movies : " + response.statusText
            );

        const data = await response.json();

        if (!data || !Array.isArray(data)) {
            throw new Error("Invalid data");
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addMovies = async (newMovie : NewMovie) => {
    try{
        const options = {
            method : "POST",
            body : JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("api/films", options);

        if (!response.ok) {
            throw new Error("Failed to add movie : " + response.statusText);
          
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};

export {fetchMovies, addMovies}