import { useContext } from "react"
import {ContextProvider} from "../Context/ThemeProvider"

const Test = () => {
    const {Value, updateValue} =useContext(ContextProvider)
  return (
    <div>{Value}
    <button onClick={updateValue}>click</button>
    </div>
  )
}

export default Test
