// import React from "react";
import "./imageSlider.css";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

 const ImageSlider = (iPath) => {
    const [currImg, setCurrImg] = useState(iPath.iPath);
   console.log(iPath.imgs[currImg].img)
 
    return (
        
        <div className="CarouselDiv" >
            <FontAwesomeIcon className="arrow" icon={faChevronLeft}  onClick={() => {
            
                console.log(iPath.iPath)
                currImg == 0 ?setCurrImg( iPath.imgs.length - 1 ) : setCurrImg(currImg - 1);
                  
             

            }} />
            <div className="CarouselImgContainer">
                <img className='activeTrans' src={iPath.imgs[currImg].img} alt="" />
                {/* <div className="CircleContainer">
                 {   

                     
                    images.map(()=>{
                        return  <FontAwesomeIcon className={`faCircle`} icon={faCircle} />
                     }
                )
                 }
                 </div> */}

            </div>

            <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={() => {
                currImg == iPath.imgs.length - 1 ? setCurrImg(0) : setCurrImg(currImg + 1)

                console.log(currImg)
            }} />

            
        </div>
    );
};


export default ImageSlider