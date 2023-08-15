import "./style.css";
import Modal from "./components/modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>This The Modal</h1>
      <button className="OpenModalBtn" onClick={() => {setOpenModal(true)}}>
        Open
      </button>
      {openModal && <Modal closeModal ={setOpenModal}/>}
    </div>
  );
}

export default App;
