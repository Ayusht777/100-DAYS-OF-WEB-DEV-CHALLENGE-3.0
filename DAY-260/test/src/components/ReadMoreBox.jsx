import { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import { BsArrowDownRightSquare } from "react-icons/bs";

export const ReadMoreBox = () => {
  const pstyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const [Isopen, setIsopen] = useState(false);
  const [showBtn, setshowBtn] = useState(false);
  const ref =useRef(null)
  useEffect(() => {
     if(ref.current){
      console.log(ref.current.scrollHeight,ref.current.clientHeight)
      setshowBtn(ref.current.scrollHeight != ref.current.clientHeight)
     }

  }, []);
  return (
    <div className={style.box}>
      <p style={Isopen ? null : pstyle}  ref={ref}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
      </p>
      {showBtn && (
        <button
          className={style.readMoreBtn}
          onClick={() => {
            setIsopen(!Isopen);
          }}
        >
          {" "}
          {Isopen ? "read less" : "read more"}{" "}
          {!Isopen && <BsArrowDownRightSquare />}
        </button>
      )}
    </div>
  );
};
