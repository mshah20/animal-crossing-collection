import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
  
const Home = () => {
  return (
    <div className="container">
        <h1>Welcome! Would you like view our critter collection?</h1>
        <Link to="/critters"><p className="yes-please">Yes please!</p></Link>
    </div>
  );
};
  
export default Home;