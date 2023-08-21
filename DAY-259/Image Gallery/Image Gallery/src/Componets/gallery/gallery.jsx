// import React from 'react'
import { images } from "../carousel/data";
import './Gallery.css'
import ImageSlider from "../carousel/imageSlider"
import { useState } from "react";
const Gallery = () => {
  const [path, setpath] = useState(-1)
  
  return (
    <div className='wrapper'>
       
      {images.map((item,idx)=>{ 
       
        
          return <img className="WrapperImg" key={idx} src= {item.img} alt=""  onClick={()=>{
              console.log(item.img) 
             
              console.log(idx)
             
              setpath(idx)

              console.log(idx)
          
            }}

            
            
            />
      })}

       {path >=0 &&  <ImageSlider  iPath = {path} imgs = {images}/> }
    </div>
  )
}

export default Gallery