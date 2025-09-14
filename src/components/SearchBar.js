import React from "react";
import "./SearchBar.css"; // optional styling

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a movie or show..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;