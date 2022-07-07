import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import AboutTeam from "./AboutTeam";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
