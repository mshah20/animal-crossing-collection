import React from "react";
import './Popup.css';

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function Popup({ icon, name, catchphrase, trigger, setTrigger } = {}) {
  (trigger) ? disableScroll() : enableScroll();

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" 
            onClick={() => {
                enableScroll()
                setTrigger(false)
            }}>X</button>
        <img src={icon} alt="critter" />
        <h2>{name}</h2>
        <hr/>
        <p>Catchphrase: <em>{catchphrase}</em></p>
      </div>
    </div>
  ) : "";
}

export default Popup;