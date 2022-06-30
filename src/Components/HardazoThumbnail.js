import React from "react";
import Img from "./Img";
function HardazoThumbnail(props) {
  return (
    <>
      <div className="img-container">
        <Img image={props.image} />
      </div>
    </>
  );
}

export default HardazoThumbnail;
