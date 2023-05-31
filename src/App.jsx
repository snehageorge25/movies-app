import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import MoviePage from "./components/MoviePage/MoviePage";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/movies-app" element={<Home />} />
          <Route path="/movies-app/movie/:movieId" element={<MoviePage />} />
          <Route path="/movies-app/explore" element={<Explore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
