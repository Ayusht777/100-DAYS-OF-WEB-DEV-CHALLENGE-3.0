
import  {useReducer, useRef} from "react"
import './App.css'
import { ReadMoreBox } from "./components/ReadMoreBox"

const reducer = (state,action)=>{
  switch(action.type){
    case "Increment":
      return { count : state.count + 1 ,showText : state.showText}
    case "toogle":
      return {count : state.count ,showText: !state.showText}
    default:
      return state
  }
}
function App() {
 

  const [state, dispatch] = useReducer(reducer,{count:0,showText : false})
  const inputRef = useRef(null)

  return (
   
   <div className='App'>
     <ReadMoreBox />
      <div className="divx">
        <h1>{state.count}</h1>
        <button onClick={()=>{
          dispatch({type:"Increment"})
          dispatch({type:"toogle"})

        }}>click</button>
         {state.showText && <p>this is a text</p>}
      </div>
      <div className="divx">
           <input type="text" placeholder="here"  ref={inputRef}/>
           <button onClick={()=>{

            inputRef.current.focus()
            inputRef.current.value = ""
           }}>change Name</button>
      </div>
    </div>
  )
}

export default App
