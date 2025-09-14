import React from 'react'
import "../pages/Home.css"

const Tabs = ({ activetab, setActivetab }) => {
  return (
    <div className="tab-section">
      <div
        className={`tab movie-tab ${activetab === "movie" ? "active" : ""}`}
        onClick={() => setActivetab("movie")}
      >
        <h2>Movies</h2>
      </div>
      <div
        className={`tab series-tab ${activetab === "tv" ? "active" : ""}`}
        onClick={() => setActivetab("tv")}
      >
        <h2>TV Shows</h2>
      </div>
    </div>
  );
};



export default Tabs