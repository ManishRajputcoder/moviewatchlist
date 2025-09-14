import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
      <a href="/" className="logo"> 🍿 <span>Popcorn</span>Picks </a> 
      </div>
      <button className="watchlist-btn">
        <Link to="/watchlist" style={{ color: "white", textDecoration: "none" }}>
    ⭐ Watchlist
        </Link>
      </button>
    </header>
  );
};

export default Header;
