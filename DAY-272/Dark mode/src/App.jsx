import Test from "./components/Test";
import Test2 from "./components/Test";
import { ContextProvider } from "./Context/ThemeProvider";
import { useState } from "react";

const App = () => {
  const [Value, setValue] = useState(0);
  const updateValue = () => {
    setValue(Value + 1);
  };
  return (
    <ContextProvider.Provider value={{ Value, updateValue }}>
      <div className=" w-56 h-56  flex justify-center items-center bg-zinc-800 text-yellow-100 flex-col gap-4">
        <Test />
        <Test2 />
      </div>
    </ContextProvider.Provider>
  );
};
export default App;
