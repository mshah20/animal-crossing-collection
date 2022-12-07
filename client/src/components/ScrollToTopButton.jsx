import React, { useState, useEffect } from "react";
import { FaAngleUp } from 'react-icons/fa';
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 275) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <button className="scrollToTopButton" style={{display: showButton ? 'inline' : 'none'}}>
      <FaAngleUp onClick={scrollToTop} />
    </button>
  );
  
}
  
export default ScrollToTopButton;

