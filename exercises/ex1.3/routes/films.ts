import { Router } from "express";

import { Film, NewFilm } from "../types";

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

router.get("/", (req, res) => {
    if(!req.query["minimum-duration"]) {
        return res.json(films);
    }
    const minimumDuration = Number(req.query["minimum-duration"]);
    const filteredFilms = films.filter((film) => {
        return film.duration >= minimumDuration;
    });
    return res.json(filteredFilms);
    
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = films.find((film) => film.id === id);
    if(!film) {
        return res.sendStatus(404);
    } else {
        return res.json(film);
    }
});

router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||

        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string" || !body.description.trim()))
    ) {
        return res.sendStatus(400);
    }

    const { title, director, duration} = body as NewFilm;

    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const newFilm: Film = {
        id: nextId,
        title,
        director,
        duration
    };

    films.push(newFilm);
    return res.status(201).json(newFilm);
});



export default router;