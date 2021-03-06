import React from "react";
import Buttons from "./Buttons";
import HardazoStar from "./HardazoStar";
import HardazoThumbnail from "./HardazoThumbnail";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

function HardazoSection(props) {
  const gaEventTracker = useAnalyticsEventTracker("HardazoSkatezine");
  return (
    <>
      <div
        className={
          "skatezine-section" + (props.even ? " content-one" : " content-two ")
        }
      >
        <HardazoStar />
        <div
          className={
            "skatezine-container" + (props.even ? " part-one" : " part-two ")
          }
        >
          <div className="skatezine-subcontainer">
            <div className="text-container">
              <h1>{props.section.content.header}</h1>
              <p className="desktop__text">{props.section.content.text1}</p>
              <p className="desktop__text">{props.section.content.text2}</p>
            </div>
            <Buttons
              name="Visualizar"
              onClick={() => {
                window.open(props.section.pdf, "blank");
                gaEventTracker(props.section.gaEventTracker);
              }}
            />
          </div>
          <HardazoThumbnail image={props.section.image} />
        </div>
      </div>
    </>
  );
}

export default HardazoSection;
