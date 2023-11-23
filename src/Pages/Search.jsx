import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card/Card";
import { popularMovies } from "../api/movies";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies(apiPath, queryTerm)
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [apiPath, queryTerm]);
  return (
    <main>
      <section>
        <div>
          <p className="text-3xl text-gray-700 dark:text-white py-7">
            {movies.length === 0
              ? `No result found for '${queryTerm}'`
              : `Result for '${queryTerm}'`}
          </p>
        </div>
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
