import React, { useState } from "react";

import "./Landing.css";
import Modal from "./Modal/Modal";

const Landing = () => {
  const [show, setSow] = useState(false);
  const closeModalHandler = () => setSow(false);
  const [confirm, setConfirm] = useState(false);

  const handleConfirmNo = () => {
    setConfirm(true);
    setSow(false);
  };
  const handleConfirmYes = () => {
    setConfirm(false);
    setSow(false);
  };




  return (
    <section className="landing">
      <div className="landing__cont">
        <div className="landing__modal-box">
          <button
            onClick={() => setSow(true)}
            className="btn-openModal"
            style={{
              color: confirm ? "red" : " rgb(87, 190, 56)",
              border: confirm
                ? "5px double  rgba(255, 121, 98, 0.603)"
                : "5px double rgba(87, 150, 66, 0.781)",
            }}
          >
            {!confirm ? `Remove` : `Undo`}
          </button>
          {show ? (
            <div onClick={closeModalHandler} className="bc-color"></div>
          ) : null}
          <Modal
            show={show}
            close={closeModalHandler}
            setConfirmNo={handleConfirmNo}
            setConfirmYes={handleConfirmYes}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
