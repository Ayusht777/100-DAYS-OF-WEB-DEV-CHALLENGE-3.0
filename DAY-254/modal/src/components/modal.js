import React from "react";
import "../style.css"

function Modal({closeModal}) {

  return (
    <div className="ModalBg">
      <div className="ModalBox">
       <div> <button  className = "crossBtn"onClick={() =>{closeModal(false)}}>✖</button></div>
        <div className="header">
          <h1>Hey 👋</h1>
        </div>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            numquam explicabo sapiente et rem nihil, eos nisi maiores beatae
            consequuntur animi, voluptatum mollitia quis enim. Inventore nemo
            dolor corporis autem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            numquam explicabo sapiente et rem nihil, eos nisi maiores beatae
            consequuntur animi, voluptatum mollitia quis enim. Inventore nemo
            dolor corporis autem.
          </p>
        </div>
        <div className="footer">
            <button onClick={() =>{closeModal(false)}}>Cancel</button>
            <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
