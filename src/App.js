import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Header />
      <Router basename="/moviewatchlist">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;
