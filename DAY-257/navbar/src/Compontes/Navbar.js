import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faPlay,faXmark
} from "@fortawesome/free-solid-svg-icons";
// import {} from '@fortawesome/free-regular-svg-icons'
import {Link} from "react-router-dom"
import { useState } from "react";

function Navbar() {

  const [btnValue,setBtnValue] = useState(false)

  return (
    <header className="Header">
      <nav>
        <div className="InnerContainer">
          
          <div className="leftContainer">
            <a href="#"><FontAwesomeIcon icon={faPlay} /> Play</a>
           </div>
          <div className="rightContainer">
            <div className="NavbarLink">
               <Link className="links"  to ="/">Home</Link>
               <Link className="links" to ="/">About</Link>
               <Link className="links" to ="/">Services</Link>
               <Link className="links" to ="/">Contact</Link>
               <button className="btn" onClick={()=>{
                 setBtnValue((btnValue)=>!btnValue)
                 
               }} >{!btnValue ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</button>
            </div>
          </div>
        </div>
        
      </nav>
      {btnValue &&   <div className="OuterContainer" style={{height:btnValue && '250px'}} >
        <Link to ="/">Home</Link>
               <Link to ="/">About</Link>
               <Link to ="/">Services</Link>
               <Link to ="/">Contact</Link>  
        </div>}
    </header>
  );
}

export default Navbar;
