import React from "react";
import './Card.css';

const Card = ({ icon, name, price, onClick }) => {
    return (
        <div className="card-container" onClick={onClick}>
            <div className="icon-container">
                <img src={icon} alt="critter" />
            </div>
            <div className="card-body">
            <hr></hr>
                <h4 className="fish-name">{name}</h4>
                <p className="fish-price">Price: {price}</p>
            </div>            
        </div>        
    );
}

export default Card;