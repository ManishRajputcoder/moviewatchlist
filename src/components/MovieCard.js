import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import "./MovieCard.css";
import { toast } from "react-toastify";
import MovieModal from "./MovieModal";
import { Link } from "react-router-dom";

const MovieCard = ({ item, mediaType }) => {
  const [showModal, setShowModal] = useState(false);
  const { wishlist, dispatch } = useWishlist();

  if (!item || !item.id) return null;

  const title = mediaType === "movie" ? item.title : item.name;
  const releaseDate = mediaType === "movie" ? item.release_date : item.first_air_date;
  const isInWishlist = Array.isArray(wishlist) && wishlist.some((m) => m.id === item.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
      toast.info("❌ Removed from Watchlist");
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
      toast.success("⭐ Added to Watchlist");
    }
  };

  return (
    <>
    <div className="movie-card">
      <Link to={`/movie/${item.id}`}>
      <img
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={title}
      />
      <div className="movie-info">
        <h4>{title}</h4>
        <p>⭐ {item.vote_average}</p>
        <p>📅 {releaseDate}</p>
        <button className="watchlist-toggle" onClick={toggleWishlist}>
        {isInWishlist ? "❌ Remove" : "⭐ Add to Watchlist"}
        </button>
      </div>
      </Link>
    </div>
    {showModal && (
        <MovieModal
          movie={item}
          mediaType={mediaType}
          onClose={() => setShowModal(false)}
        />
      )}
      
    </>
  );
};

export default MovieCard;