import React from "react";
import "../Landing.css";

const Modal = ({ show, close, setConfirmNo, setConfirmYes }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(5%)" : "translateY(0)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>
          <span>Kolibri</span> is able to help you!
        </p>
        <span className="close-modal-btn" onClick={close}>
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolores
          eum esse eius possimus quidem hic rerum aperiam, nulla, ut est
          obcaecati error, doloremque asperiores maiores molestias quia nemo
          totam.
        </div>
        <div className="modal-footer">
          <button className="btn-cancel red" onClick={setConfirmNo}>
            no
          </button>
          <button className="btn-cancel green" onClick={setConfirmYes}>
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
