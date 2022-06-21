
import React from "react";
import IMAGES from "../Assets/Images";

function Header(){
return (
    <>
        <header className="header">
        <div className="header__img">
            <img src={IMAGES.logo} alt="logo" />
        </div>
        <hr className="hr-header"/>
        </header>
    </>
    );
}

export default Header;