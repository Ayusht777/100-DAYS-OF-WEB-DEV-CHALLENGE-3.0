import React from "react";
import "./imageSlider.css";
import { images } from "../Compontes/data";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight, faChevronLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

export const ImageSlider = () => {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="CarouselDiv">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} style={{ display: (currImg === 0) && 'none' }} onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);

                console.log(currImg);

            }} />
            <div className="CarouselImgContainer">
                <img className='activeTrans' src={images[currImg].img} alt="" />
                {/* <div className="CircleContainer">
                 {   

                     
                    images.map(()=>{
                        return  <FontAwesomeIcon className={`faCircle`} icon={faCircle} />
                     }
                )
                 }
                 </div> */}

            </div>

            <FontAwesomeIcon className="arrow" icon={faChevronRight} style={{ display: (currImg === images.length - 1) && 'none' }} onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1)

                console.log(currImg)
            }} />
        </div>
    );
};
