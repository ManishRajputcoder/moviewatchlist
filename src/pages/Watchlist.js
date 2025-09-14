import React from "react";
import { useWishlist } from "../context/WishlistContext";
import MovieCard from "../components/MovieCard";
import "./Home.css";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">⭐ My Watchlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-message">No movies added yet. Start exploring!</p>
      ) : (
        <div className="grid-container">
          {wishlist.map((item) => (
            <MovieCard key={item.id} item={item} mediaType={item.media_type || "movie"} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;