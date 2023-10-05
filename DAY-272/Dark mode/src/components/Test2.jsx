import { useContext } from "react";
import { ContextProvider } from "../Context/ThemeProvider";

const Test2 = () => {
  const { Value, updateValue } = useContext(ContextProvider);
  return (
    <div className="w-auto h-auto bg-white">
      {Value}
      <button onClick={updateValue} className="w-24 h-12 bg-yellow-400 ">
        click
      </button>
    </div>
  );
};

export default Test2;
