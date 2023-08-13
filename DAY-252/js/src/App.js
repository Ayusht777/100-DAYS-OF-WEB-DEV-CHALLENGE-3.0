import "./App.css";

function App() {
  // const name = "ayush";
  // const nametype = <h1>{name}</h1>;
  // const multi = (
  //   <div>
  //     <h2>47</h2>
  //     <h2>47</h2>
  //     <h2>47</h2>
  //   </div>
  // );

  const co = false;

  const ls = ["ayush", "divyanshu", "harshit"];

  const lsx = [
    { name: "ayush", age: 21 },
    { name: "divynashu" },
    { name: "harshit" },
  ];

  return (
    <div className="App">
      {/* hello react and {name}
      <h1>{name}</h1>
      {nametype}
      {multi} */}
      <Info n="ayush" a={21} m="ayush@mail.com" />

      <Job salary={100000} role="SDE" company="META" />
      <Job salary={1000} role="SDE" company="ALPHA" />
      <Job salary={60000} role="SDE" company="BETA" />

      {<h1 style={{ color: co ? "blue" : "Red" }}>color</h1>}
      {/* index optional hai */}
      {ls.map((name, index) => {
        return <h1>{name + " " + index}</h1>;
      })}

      {lsx.map((items, index) => {
        return (
          // <div>
          //   {
          //     "name is "+ items.name + (items.age?" of age "+items.age : ' None' )+" at index " + index

          //   }

          // </div>
          <Lsprops name={items.name} age={items.age} />
        );
      })}
    </div>
  );
}

// const getnameJSFUNC = ()=>{
//   return "ayush"

// }
// const GetnameJSFUNC = ()=>{
//   return <h1>ayush</h1>

// }

const Info = (props) => {
  return (
    <div>
      <h1>{props.n}</h1>
      <h2>{props.a}</h2>
      <h3>{props.m}</h3>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      if ({props.salary <= 10000}) {<h1 className="salary">{props.salary}</h1>}
      else{<h1 className="salary">LESS THAN AVG</h1>}
      <h1>{props.role}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

const Lsprops = (props) => {
  return <div>{props.name + props.age}</div>;
};
export default App;
