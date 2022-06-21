import React from "react";

function Buttons(props) {
  return (
    <>
    <div className="button-container">
      <button onClick={props.onClick}>{props.name}</button>
    </div>
    </>
  );
}

export default Buttons;
