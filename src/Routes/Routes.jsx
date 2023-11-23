import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MovieList from "../Pages/MovieList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MovieList />,
      },
      {
        path: "/movies/popular",
        element: <MovieList />,
      },
      {
        path: "/movies/top",
        element: <MovieList />,
      },
      {
        path: "/movies/upcoming",
        element: <MovieList />,
      },
    ],
  },
]);
