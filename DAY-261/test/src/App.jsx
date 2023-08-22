import style from "./App.module.css";
import { useState } from "react";

import Axios from "axios";
import { useEffect } from "react";

function App() {
  const [catData, setcatData] = useState("");
  const [ageD, setAgeD] = useState(null);
  const [name, setName] = useState("");
  const fetchD = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcatData(res.data.fact);
    });
  };
  const fetchA = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      setAgeD(res.data);
    });
  };

  useEffect(() => {
    fetchD();
  }, []);
  return (
    <div className={style.App}>
      <button
        onClick={() => {
          fetchD;
        }}
      >
        click
      </button>
      <p>{catData}</p>

      <input
        placeholder="your name"
        onChange={(e) => {
          setName(e.target.value);
          
        }}
      />

      <button onClick={fetchA}>Predict Your Age</button>
      
      <p>age : {ageD?.age}</p>
    </div>
  );
}

export default App;
