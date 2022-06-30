import React from "react";

function Img(props) {
  return (
    <>
      <img
        src={props.image.link}
        alt={props.image.alt}
        title={props.image.alt}
      />
    </>
  );
}

export default Img;
