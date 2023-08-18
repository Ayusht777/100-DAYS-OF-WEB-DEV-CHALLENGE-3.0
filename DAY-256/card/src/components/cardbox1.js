// import {useState} from "react"

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Card1(props) {
  return (
    <div className="cardBox">
      <div className="titleBox">
        <h2>{props.title}</h2>
      </div>

      <img className="Bgimg" src={props.ImgSrc} alt="cardbg" />
    </div>
  );
}

function Card2(props) {
 
  return (
    <div className={`Card2`} style={{ backgroundColor: props.color}}>
      {/* <button  className="CloseBtn"  ><FontAwesomeIcon className="icon" icon={faArrowLeft} /></button>  */}
    
      <p>{props.info}</p>
       
    </div>
  );
}

export { Card1, Card2 };
