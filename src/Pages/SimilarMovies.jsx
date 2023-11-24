import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const SimilarMovies = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSimilarMovies(data.results));
  }, [id]);
  console.log(similarMovies);
  return (
    <section>
      <h1 className="text-white font-bold text-3xl border-l-4 border-yellow-400 pl-3 mt-16 mb-10">
        More Like This
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {similarMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default SimilarMovies;
