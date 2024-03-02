import React from "react";
import "./modal.css";
import closeIcon from "@assets/close.svg";

function Modal({children, onclose}) {
  return (
    <div className="modal-container d-flex justify-content-center align-items-center ">
      <div className=" modal-box border border-1">

        <img
          className="modal-close-icon"
          src={closeIcon}
          alt=""
          height={"20px"}
          onClick={onclose}
        />
        <div className="modal-heading w-100">heading of modal</div>
    
        
      
      {children}
   
      </div>
   
    </div>
  );
}

export default Modal;
