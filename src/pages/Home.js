import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import "./Home.css";
import { fetchMovies, searchMovies } from "../services/tmdb";

const HomePage = () => {
  const [activetab, setActivetab] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getItems = async () => {
      let data = [];

      if (searchQuery.trim() !== "") {
        data = await searchMovies(searchQuery, page);
      } else {
        data = await fetchMovies(activetab, page);
      }

      if (page === 1) {
        setItems(data.slice(0, 20));
      } else {
        setItems((prev) => [...prev, ...data.slice(0, 20)]);
      }
    };

    if (activetab) {
      getItems();
    }
  }, [activetab, page, searchQuery]);

  const handleViewMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="home-container">
      <p className="tagline">🎬 “Save. Track. Binge.”</p>

      {/* 🔍 Separated SearchBar Component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Tabs
        activetab={activetab}
        setActivetab={(tab) => {
          setActivetab(tab);
          setItems([]);
          setPage(1);
          setSearchQuery("");
        }}
      />

      <div className="grid-container">
        {items.map((item) => (
          <MovieCard key={item.id} item={item} mediaType={activetab} />
        ))}
      </div>

      {items.length > 0 && (
        <button onClick={handleViewMore} className="view-more-btn">
          📥 View More
        </button>
      )}
    </div>
  );
};

export default HomePage;
