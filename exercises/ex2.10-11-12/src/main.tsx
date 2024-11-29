import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import HomePage from "./components/Pages/HomePage";
import CinemaPage from "./components/Pages/CinemaPage";
import MovieListePage from "./components/Pages/MovieListePage";

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
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
