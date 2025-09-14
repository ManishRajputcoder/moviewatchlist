import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos } from "../services/tmdb";
import { useWishlist } from "../context/WishlistContext";
import "./Home.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { wishlist, dispatch } = useWishlist();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    const getMovieTrailer = async () => {
      const videos = await fetchMovieVideos(id);
      const trailer =
        videos.find(
          (vid) =>
            vid.type === "Trailer" && vid.site === "YouTube" && vid.official
        ) || videos.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");

      if (trailer) setTrailerKey(trailer.key);
    };

    getMovieDetails();
    getMovieTrailer();
  }, [id]);

  if (!movie) return <p className="loading-text">Loading...</p>;

  const isInWishlist = wishlist.some((m) => m.id === movie.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: movie });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
    }
  };

  return (
    <div className="movie-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="movie-container">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : "https://via.placeholder.com/300x600?text=No+Image"
          }
          alt={movie.title || movie.name}
          className="movie-poster"
        />

        <div className="movie-details">
          <h1 className="movie-title">{movie.title || movie.name}</h1>
          <p className="movie-overview">{movie.overview || "No overview available."}</p>
          <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}</p>
          <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>

          <button
            onClick={toggleWishlist}
            className={`wishlist-button ${isInWishlist ? "remove" : "add"}`}
          >
            {isInWishlist ? "Remove From Watchlist" : "Add To Watchlist"}
          </button>

          {trailerKey && (
            <div className="trailer-container">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )} 
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
