import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import SimilarMovies from "./SimilarMovies";

const MovieDetails = () => {
  const movieDetailsData = useLoaderData();
  console.log(movieDetailsData);
  const posterImg = `https://image.tmdb.org/t/p/w500${movieDetailsData.poster_path}`;

  useTitle(movieDetailsData.title);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={posterImg}
            alt={`${movieDetailsData.title} poster image`}
          />
        </div>
        <div className="max-w-2xl text-lg text-gray-700 dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movieDetailsData.title}
          </h1>
          <p className="my-4">{movieDetailsData.overview}</p>
          {movieDetailsData.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movieDetailsData.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {movieDetailsData.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movieDetailsData.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movieDetailsData.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movieDetailsData.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movieDetailsData.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movieDetailsData.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movieDetailsData.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {movieDetailsData.imdb_id}
            </a>
          </p>
        </div>
      </section>
      <SimilarMovies id={movieDetailsData.id} />
    </main>
  );
};

export default MovieDetails;
