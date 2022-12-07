import React, {useState, useEffect} from "react";
import './Critters.css';
import Card from './Card';
import Popup from './Popup';
import axios from 'axios';
import ScrollToTopButton from "./ScrollToTopButton";

const Critters = () => {
  
  const [fish, setFish] = useState([]);
  const [sea, setSea] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [selectedCritter, setSelectedCritter] = useState({})
  const [cardPopup, setCardPopup] = useState(false);

  const formatNames = (data) => {
    data.map(critter => {

      const words = critter.name.split(" ");
      
      critter.name = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");

    });
  }

  useEffect(() => {
    const fetchFish = async () => {
      const { data } = await axios.get('http://localhost:5000/fish')

      formatNames(data);
      setFish(data);
    }

    const fetchSea = async () => {
      const { data } = await axios.get('http://localhost:5000/sea')
    
      formatNames(data);
      setSea(data);
    }

    const fetchBugs = async () => {
      const { data } = await axios.get('http://localhost:5000/bugs')

      formatNames(data);
      setBugs(data);
    }

    fetchFish()
    fetchSea()
    fetchBugs()
  }, [])

  return (
    <div className="critters-page">

      <Popup 
        icon={selectedCritter.icon_uri} 
        name={selectedCritter.name} 
        catchphrase={selectedCritter.catchphrase}
        trigger={cardPopup} 
        setTrigger={setCardPopup}
      />

      <h1 className="fish-header">FISH</h1>
      <hr/>
            
      <div className="cards-container">
        {fish.map(fish =>
          <>
            <Card icon={fish.icon_uri} 
              name={fish.name} 
              price={fish.price} 
              onClick={() => {
                setSelectedCritter(fish)
                setCardPopup(true)
              }} />
          </>
        )}

      </div>

      <hr/>
      <h1 className="sea-header">SEA CREATURES</h1>
      <hr/>

      <div className="cards-container">
        {sea.map(sea => 
          <>
            <Card 
              icon={sea.icon_uri} 
              name={sea.name} 
              price={sea.price} 
              onClick={() => {
                setSelectedCritter(sea)
                setCardPopup(true)
              }} />  
          </>
        )}
      </div>

      <hr/>
      <h1 className="bugs-header">BUGS</h1>
      <hr/>

      <div className="cards-container">
        {bugs.map(bug => 
          <>
            <Card 
              icon={bug.icon_uri} 
              name={bug.name} 
              price={bug.price} 
              onClick={() => {
                setSelectedCritter(bug)
                setCardPopup(true)
              }} />  
          </>
        )}

      </div>
      
      <ScrollToTopButton/>

    </div>
  );
};
  
export default Critters;