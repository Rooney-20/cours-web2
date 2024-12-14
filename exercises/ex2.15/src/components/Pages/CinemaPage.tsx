import Cinema from "../Cinema/Cinema";

import {Movies} from "../../types"


const CinemaPage = () => {
  //const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 : Movies[] = [
    {
        id : 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
        duration: 108,
    },
    {
        id : 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
        duration: 124,
    },
    {
        id : 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
        duration: 138,
    },
    {
        id : 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
        duration: 108,
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 : Movies[] = [
    {
        id : 1,
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
        duration: 90,
    },
    {
        id : 2,
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
        duration: 120,
    },
    {
        id: 3,
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
        duration: 148,
    },
    {
        id: 4,
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
        duration: 132,
    },
  ];


  
  return (
    <div>

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
};








export default CinemaPage;
