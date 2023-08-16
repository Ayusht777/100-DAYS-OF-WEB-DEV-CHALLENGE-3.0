// import {useState} from "react"
import '../App.css';

function Card1(props){
   
  return (
    <div className='cardBox'>
      <div className="titleBox">
        <h1>{props.title}</h1>
        
      </div>

      <img className='Bgimg' src={props.ImgSrc} alt="cardbg" />
    </div>
  );
}


export default Card1;