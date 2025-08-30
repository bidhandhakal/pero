import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
