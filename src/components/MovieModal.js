// src/components/MovieModal.js
import React from "react";
import "./MovieCard.css";

const MovieModal = ({ movie, mediaType, onClose }) => {
  if (!movie) return null;

  const title = mediaType === "movie" ? movie.title : movie.name;
  const releaseDate =
    mediaType === "movie" ? movie.release_date : movie.first_air_date;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>
        <img
          className="modal-poster"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={title}
        />
        <div className="modal-details">
          <h2>{title}</h2>
          <p><strong>⭐ Rating:</strong> {movie.vote_average}</p>
          <p><strong>📅 Release:</strong> {releaseDate}</p>
          <p className="modal-overview">{movie.overview || "No overview available."}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
