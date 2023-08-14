
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark ,faCheck} from "@fortawesome/free-solid-svg-icons";

export const Task = (props) =>{
   const bull = false;
   return(
    <div >
                  
                  <h1>{props.taskName}</h1>
                  <button onClick={() => props.deleteTask(props.id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <button onClick={() => {
                    props.completeTask(props.id)
                    // bull =true;

                  }} ><FontAwesomeIcon icon={faCheck} /></button>
                </div>
   )
}