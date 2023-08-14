import "./App.css";

import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [inputv, setInputv] = useState("");

  const [showText, setshowText] = useState(true);

  const [showColor, setShowColor] = useState("blue");

  const incr = () => {
    setAge(age + 1);
  };

  const inputchange = (e) => {
    setInputv(e.target.value);
  };

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      {age}
      <button onClick={incr} style={{ backgroundColor: "gray" }}>
        Increase age
      </button>

      <input type="text" onChange={inputchange} />
      {inputv}

      <div>
        <button
          onClick={() => {
            setshowText(!showText);
          }}
        >
          SHOW/HIDE
        </button>
        {showText === true && <h1>my name is ayush</h1>}
      </div>

      <div>
        <button
          onClick={() => {
            setShowColor(showColor === "blue" ? "green" : "blue");
          }}
        >
          CHANGE color
        </button>

        <h1 style={{ color: showColor }}>HELLO</h1>
      </div>

      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          inc
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          dec
        </button>
        <button
          onClick={() => {
            setNum(0);
          }}
        >
          zero
        </button>
        {num}
      </div>
    </div>
  );
}

export default App;
