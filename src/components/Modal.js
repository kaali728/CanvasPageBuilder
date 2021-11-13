import React from "react";

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <input className="modalInput" value={children} />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
