import React from "react";
import HardazoSection from "../Components/HardazoSection";
import Sections from "../Assets/Sections";

function SkatezineContent() {
  return (
    <>
      <div className="body-container">
        <div className="content-container">
          {Sections.map((section, index) => (
            <HardazoSection even={index % 2 === 0} section={section} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SkatezineContent;
