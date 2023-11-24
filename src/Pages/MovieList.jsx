import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { popularMovies } from "../api/movies";
import useTitle from "../hooks/useTitle";

const MovieList = ({ apiPath, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies(apiPath)
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [apiPath]);

  useTitle(title);

  return (
    <main>
      <section>
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
