import React from "react";
import IMAGES from "../Assets/Images";
import PDF from "../Assets/Pdf";

function Footer() {
  return (
    <>
      <hr className="hr-footer"/>
      <div className="footer-container">
        <div className="footer-img"><img className="resize" src={IMAGES.logoFooter} alt="logo" /></div>
        <div className="content">
          <ul>
            <li></li>
            <li><a href={PDF.politicaPrivacidad} target="blank">Privacy Policy</a></li>            
          </ul>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/hardazoskatezine/" target="blank"><img className="resize" src={IMAGES.instragram} alt="instragram" /></a>
        </div>
      </div>
    </>
  );
}

export default Footer;