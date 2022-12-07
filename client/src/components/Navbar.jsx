import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <h1>Critter Collection</h1>
      <ul>
        <li>
          <Link to="/"><p className="nav-button">Home</p></Link>
        </li>
        <li>
          <Link to="/critters"><p>Critters</p></Link>
        </li>
        <li>
          <Link to="/about"><p>About</p></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;