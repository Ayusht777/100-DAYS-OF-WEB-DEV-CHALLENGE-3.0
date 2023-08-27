
import { useState, useEffect } from "react";
import style from "./weatherAppComponent.module.css";
import Axios from "axios";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { WiCelsius } from "react-icons/wi";
import warm from "./assets/Warm.png";
import * as Math from "mathjs"
const WeatherAppComponent = () => {
  const [weatherData, setweatherData] = useState(null);
const [temp, setTemp] = useState(0)
  const fetchData = () => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f458fe9b85a5aad938afb32733419a3d"
    ).then((res) => {
      setweatherData(res.data);
      setTemp(Math.floor(res.data.main.temp) - 273)
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <div className={style.WeatherAppContainer}>
      {console.log(weatherData)}
      <div className={style.WeatherAppSearchBarContainer}>
        <div className={style.searchBar}>
          <FiMapPin />
          <input type="text" placeholder="Weather in your city?" />
          <FiSearch />
        </div>
      </div>
      <div className={style.WeatherDataContainer}>
        <div className={style.WeatherDataLeft}>
          <div className={style.ImgBox}>
            <img src={warm} alt="" />
          </div>
          <div className={style.text}>
            <div className={style.temp}>
              <h1>{temp}</h1>
              <WiCelsius />
            </div>
            <div className={style.weatherType}>
              <p>
                Warm 32°<span>/</span>22°
              </p>
            </div>
            <div className={style.date}>Today 23/8/23</div>
          </div>
        </div>
        <div className={style.WeatherDataRight}></div>
      </div>
    </div>
  );
};

export default WeatherAppComponent;
