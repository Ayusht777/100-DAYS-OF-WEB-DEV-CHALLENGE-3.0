import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import Math from "mathjs"
import {BiSearch,BiSolidUser} from "react-icons/bi"
import {HiLocationMarker} from "react-icons/hi"
import s from "./weatherAppComponent.module.css";
const url = "https://api.openweathermap.org/data/2.5/weather?";
const WeatherAppComponent = () => {
  const inputRef = useRef(null);
  const [City, setCity] = useState("");
  const [Data, setData] = useState(null);
  useEffect(() => {
    const ApiCall = async () => {
      if (City !== "") {
        const res = await axios.get(
          url + `q=${City}` + `&appid=f458fe9b85a5aad938afb32733419a3d`
        );
        setData(res.data);
        console.log(res.data)
      }
    };
    ApiCall();
  }, [City]);
  const HandleClick = () => {
    setCity(inputRef.current.value);
  };

  console.log(Data?.main.temp);
  return (
    <div className={s.AppBox}>
      <div className={s.header}>
        <div className={s.location}>
           <HiLocationMarker/>{Data?.name}{", "+Data?.sys.country}
        </div>
        <div className={s.SearchBox}>
          <div className={s.SearchBar}>
          <button
            onClick={() => {
              HandleClick();
            }}>
            <BiSearch/></button>
          <input type="text" ref={inputRef}  placeholder="Search city..."/>
          
          </div>
        </div>
        <div className={s.userLogo}>
          <BiSolidUser/>
        </div>
      </div>
    </div>
  );
};

export default WeatherAppComponent;
