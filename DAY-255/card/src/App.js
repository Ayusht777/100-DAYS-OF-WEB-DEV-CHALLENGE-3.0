
import './App.css';
import {useState} from "react"

import BGimg from "./Img/01.jpg"
import Card1  from  "./components/cardbox1.js"

function App() {
   const headLine = "Honey Glazed Carrots with Fresh Herbs"
   const color = "#97dddd";
  
  return (
    <div className="App">
      <div style={{backgroundColor:color}} className="container">
          
             <Card1 title = {headLine} color = {color} ImgSrc = {BGimg}/>
        
      </div>
      
    </div>
  );

}





export default App;
