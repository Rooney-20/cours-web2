import { SyntheticEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";


function AddMoviePage() {
  const [title, setTitle] = useState(" ");
  const [director, setDirector] = useState(" ");
  const [duration, setDuration] = useState(0);
  const [image, setImage] = useState(" ");

  const { onMovieAdded }: MoviesContext = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieAdded({ title : title, director :director, duration :duration, image:image });
    navigate("/MovieListepage");
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    setDuration(parseInt(durationInput.value));
  };

  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    setImage(imageInput.value);
  };

  return (
    <>
      <div>
        <p>My HomePage</p>
        <p>
          Because we love Movies, you can add your favorite movies here
        </p>
      </div>
      <div className="container">
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="movie">Movie</label>
            <input
              value={title}
              type="text"
              id="title"
              name="title"
              onChange={handleTitleChange}
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="director">Director</label>
            <input
              value={director}
              type="text"
              id="director"
              name="director"
              onChange={handleDirectorChange}
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              value={duration}
              type="number"
              id="duration"
              name="duration"
              onChange={handleDurationChange}
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="image">Add Image</label>
            <input
              value={image}
              type="url"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
}


export default AddMoviePage;