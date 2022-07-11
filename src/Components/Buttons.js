import React from "react";

function Buttons(props) {
  return (
    <>
    <div className="button-container">
      <button id={props.id} onClick={props.onClick}>{props.name}</button>
    </div>
    </>
  );
}

export default Buttons;
