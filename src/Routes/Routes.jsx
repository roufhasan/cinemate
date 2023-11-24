import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MovieList from "../Pages/MovieList";
import MovieDetails from "../Pages/MovieDetails";
import Search from "../Pages/Search";
import ErrorPage from "../Pages/ErrorPage";
import { movieDetails } from "../api/movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MovieList apiPath="movie/now_playing" />,
      },
      {
        path: "/movies/popular",
        element: <MovieList apiPath="movie/popular" />,
      },
      {
        path: "/movies/top",
        element: <MovieList apiPath="movie/top_rated" />,
      },
      {
        path: "/movies/upcoming",
        element: <MovieList apiPath="movie/upcoming" />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
        loader: ({ params }) => movieDetails(params.id),
      },
      {
        path: "/search",
        element: <Search apiPath="search/movie" />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
