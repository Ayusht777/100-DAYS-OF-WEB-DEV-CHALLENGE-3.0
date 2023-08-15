import {useState} from "react"

 export const Text = ()=>{
     
    const [getText , setgetText] = useState("")
    const handleChange = (e)=>{
        setgetText(e.target.value)
    }
    return(
        <div>
            <input type="text"  onChange={handleChange}/>
            <h1>{getText}</h1>
        </div>
    );
}