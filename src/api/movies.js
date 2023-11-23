export const popularMovies = async (apiPath, queryTerm = "") => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${apiPath}?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${queryTerm}`
  );
  const data = await response.json();
  return data.results;
};
