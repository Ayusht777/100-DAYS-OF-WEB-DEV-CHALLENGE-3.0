import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import Math from "mathjs"
import { BiSearch } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import {TiWeatherCloudy} from 'react-icons/ti'
import s from "./weatherAppComponent.module.css";
import user from "./assets/user.png";
import { images } from "./img";

const url = "https://api.openweathermap.org/data/2.5/weather?";
const WeatherAppComponent = () => {
  const inputRef = useRef(null);
  const [City, setCity] = useState("");
  const [Data, setData] = useState(null);
  const [path, setPath] = useState("");
  useEffect(() => {
    const ApiCall = async () => {
      if (City !== "") {
        const res = await axios.get(
          url + `q=${City}` + `&appid=f458fe9b85a5aad938afb32733419a3d`
        );
        setData(res.data);
     
      }
    };

    ApiCall();

    const imagePath = () => {
      console.log(images[0]);
      if (Data.weather[0].icon === "50d") {
        setPath(images[8].img);
        console.log("done", path);
      }
    };
    imagePath();
  }, [City]);
  const HandleClick = () => {
    setCity(inputRef.current.value);
  };

  // console.log(Data?.main.temp,path);

  return (
    <div className={s.AppBox}>
      <div className={s.header}>
        <div className={s.location}>
          <HiLocationMarker />
          {Data?.name}
          {", " + Data?.sys.country}
        </div>
        <div className={s.SearchBox}>
          <div className={s.SearchBar}>
            <button
              onClick={() => {
                HandleClick();
              }}
            >
              <BiSearch />
            </button>
            <input type="text" ref={inputRef} placeholder="Search city..." />
          </div>
        </div>
        <div className={s.userLogo}>
          <img src={user} alt="" />
        </div>
      </div>
      <div className={s.weatherInfoBox}>
        <div className={s.WeatherCurrent}>
          <div className={s.weatherTitle}>
            <div className={s.TitleIcon}>
            <TiWeatherCloudy/>
            <div></div>
            </div>
            <div className={s.Title}>
              <h1>Weather</h1>
              <p>whats the weather.</p>
            </div>
              
          </div>
          <div className={s.weatherBody}>
            <div className={s.weatherBodyL}>
              <img src={path} alt="" />
            </div>
            <div className={s.weatherBodyR}></div>
          </div>
          <div className={s.weatherFooter}></div>
        </div>
        <div className={s.AirInfo}></div>
        <div className={s.Recent}></div>
      </div>
    </div>
  );
};

export default WeatherAppComponent;
