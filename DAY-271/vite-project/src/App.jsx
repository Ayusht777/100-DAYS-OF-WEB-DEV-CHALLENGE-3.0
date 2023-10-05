

import './App.css'
import  Componet1 from  "./components/componet1"
import Componet2 from './components/componet2'
import { createContext,useState } from 'react'

export const AppHooks = createContext()

function App() {
 const [Name, setName] = useState("")
  return (
   <div className='App'>
    <AppHooks.Provider value={{Name,setName}}>
    <Componet1  />
     <Componet2 />
    </AppHooks.Provider>

   </div>
  )
}

export default App
