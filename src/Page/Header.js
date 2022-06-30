import React from "react";
import IMAGES from "../Assets/Images";
import Img from "../Components/Img";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__img">
          <Img image={IMAGES.logo} />
        </div>
        <hr className="hr-header" />
      </header>
    </>
  );
}

export default Header;
