import { Movies } from "../types";

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

export default defaultMovies;