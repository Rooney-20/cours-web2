import { Router } from "express";

import { Film } from "../types";

const router = Router();

const films : Film[] = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        duration: 148
    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality...",
        imageUrl: "https://example.com/matrix.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,
        description : "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
        imageUrl: "https://example.com/interstellar.jpg"
    }
];

router.get("/", (_req, res) => {
    return res.json(films);
});




export default router;