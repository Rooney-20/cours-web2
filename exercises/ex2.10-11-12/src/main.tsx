import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import HomePage from "./components/Pages/HomePage";
import CinemaPage from "./components/Pages/CinemaPage";
import MovieListePage from "./components/Pages/MovieListePage";
import AddMoviePage from "./components/Pages/AddMoviePage";
import MovieIdPage from "./components/Pages/MovieIdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/CinemaPage",
        element: <CinemaPage />,
      },
      {
        path: "/MovieListePage",
        element: <MovieListePage />,
      },
      {
        path: "/AddMoviePage",
        element: <AddMoviePage />,
      },
      {
        path: "movies/:id",
        element: <MovieIdPage />
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
