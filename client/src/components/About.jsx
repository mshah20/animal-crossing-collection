import React from "react";
import './About.css'
  
const About = () => {
  return (
    <div className="about-page">
      <div className="text-container">
        <h1>Thank you for visiting The Critter Collection!</h1>
        <hr/>
        <p>This website contains all fish, sea creatures, and bugs from Animal Crossing: New Horizons.</p>
        <p>You can view the prices of each critter and even view their catchphrase by clicking on their card.</p>
        <hr/>
        <p>This website was created for educational purposes only.</p>
        <p>Created with the help of ACNHAPI.</p>
        <p>All critter icons are property of Nintendo.</p>
      </div>    
    </div>
  );
};
  
export default About;