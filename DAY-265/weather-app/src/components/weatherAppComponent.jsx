import axios from "axios";
import { useEffect, useRef, useState } from "react";
import * as Math from "mathjs";
import { BiSearch } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { TiWeatherCloudy } from "react-icons/ti";
import s from "./weatherAppComponent.module.css";
import user from "./assets/user.png";
import { images } from "./img";

const url = "https://api.openweathermap.org/data/2.5/weather?";
const WeatherAppComponent = () => {
  const inputRef = useRef(null);
  const [City, setCity] = useState("");
  const [Data, setData] = useState(null);
  // const [AirData, setAirData] = useState(null);
  const [Temp, setTemp] = useState(null);
  const [MinTemp, setMinTemp] = useState(null);
  const [MaxTemp, setMaxTemp] = useState(null);

  useEffect(() => {
    const ApiCall = async () => {
      if (City !== "") {
        const res = await axios.get(
          url + `q=${City}` + `&appid=f458fe9b85a5aad938afb32733419a3d`
        );
        console.log(res.data)
        setData(res.data);

        // const AirD = await axios.get(
        //   `http://api.openweathermap.org/data/2.5/air_pollution?lat=${Data?.coord.lat}&lon=${Data?.coord.lon}&appid=f458fe9b85a5aad938afb32733419a3d`
        // )
        // setAirData(AirD)

        setTemp(Math.floor(Data?.main?.temp ?? 0) - 273);

        setMaxTemp(Math.floor(Data?.main?.temp_max ?? 0) - 273);
        setMinTemp(Math.floor(Data?.main?.temp_min ?? 0) - 273);
      }
    };

    ApiCall();
  }, [City]);

  const HandleClick = () => {
    setCity(inputRef.current.value);
  };

  const iconMappings = {
    "01d": images[0].img,

    "02d": images[1].img,
    "03d": images[2].img,
    "04d": images[3].img,
    "09d": images[4].img,
    "10d": images[5].img,
    "11d": images[6].img,
    "13d": images[7].img,
    "50d": images[8].img,
    "01n": images[9].img,
    "02n": images[10].img,
    "03n": images[11].img,
    "04n": images[12].img,
    "09n": images[13].img,
    "10n": images[14].img,
    "11n": images[15].img,
    "13n": images[16].img,
    "50n": images[17].img,
  };

  const weatherIcon = Data?.weather[0]?.icon;
  const iconSrc = iconMappings[weatherIcon];

  const bgMapping = {
    "01d": images[0].bg,

    "02d": images[1].bg,
    "03d": images[2].bg,
    "04d": images[3].bg,
    "09d": images[4].bg,
    "10d": images[5].bg,
    "11d": images[6].bg,
    "13d": images[7].bg,
    "50d": images[8].bg,
    "01n": images[9].bg,
    "02n": images[10].bg,
    "03n": images[11].bg,
    "04n": images[12].bg,
    "09n": images[13].bg,
    "10n": images[14].bg,
    "11n": images[15].bg,
    "13n": images[16].bg,
    "50n": images[17].bg,
  };

  const bgSrc = bgMapping[weatherIcon];
  // console.log(Data?.coord);

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
        <div className={s.WeatherCurrent} style={{ backgroundImage: bgSrc }}>
          <div className={s.weatherTitle}>
            <div className={s.TitleIcon}>
              <TiWeatherCloudy />
              <div></div>
            </div>
            <div className={s.Title}>
              <h1>Weather</h1>
              <p>whats the weather.</p>
            </div>
          </div>
          <div className={s.weatherBody}>
            {Data != null && <img src={iconSrc} alt="" />}
          </div>
          <div className={s.weatherFooter}>
            <div className={s.one}>
              <p>now</p>
              <h1>{Temp + "°C"}</h1>
              <p>{Data?.weather[0].description}</p>
            </div>
            <div className={s.two}>
              <p>‎ </p>
              <h1>{MaxTemp + "°C"}</h1>
              <p>max</p>
            </div>
            <div className={s.three}>
              <p>‎ </p>
              <h1>{MinTemp + "°C"}</h1>
              <p>min</p>
            </div>
          </div>
        </div>
        <div className={s.AirInfo}>
          <div className={s.Airheader}></div>
          <div className={s.Airbody}></div>
          <div className={s.Airfooter}></div>
        </div>
        <div className={s.Recent}></div>
      </div>
    </div>
  );
};

export default WeatherAppComponent;
