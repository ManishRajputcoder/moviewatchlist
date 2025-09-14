const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type = "movie", page = 1) => {
  const res = await fetch(
    `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data;
};

export const fetchMovieVideos = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data.results; // Array of video objects
};

