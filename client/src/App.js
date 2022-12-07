import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Critters from "./components/Critters";

export default function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/critters" element={<Critters />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}