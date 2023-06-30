import React from "react";
import "../components/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
