import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,

} from "@fortawesome/free-solid-svg-icons";

import BGimg from "./Img/01.jpg";
import { Card1, Card2 } from "./components/cardbox1";

function App() {
  const [btn, setBtn] = useState(false);
  const headLine = "Honey Glazed Carrots with Fresh Herbs";
  const color = "#97dddd";
  const info = `Indulge your taste buds with our delightful Honey Glazed Carrots with Fresh Herbs. These tender, vibrant orange carrots are transformed into a mouthwatering side dish that perfectly balances sweet and savory flavors.Gently cooked to perfection, the carrots retain their natural crunch while absorbing a luscious glaze made from golden honey. The glaze adds a subtle sweetness that harmonizes flawlessly with the earthy undertones of the carrots.To elevate this dish even further, we sprinkle a generous amount of fresh herbs over the glazed carrots. The fragrant blend of aromatic basil, parsley, and thyme adds a pop of freshness and depth to each bite, enhancing the overall culinary experience.
   `;
  const HandleClick = () => {
    setBtn(!btn);
    
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: color }} className="container">
        <Card1 title={headLine} color={color} ImgSrc={BGimg} />
        <button className="rightBtn" onClick={HandleClick}>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </button>
        {btn && <Card2 info={info} color={color}/>  }
        
      
      </div>
    </div>
  );
}

export default App;
