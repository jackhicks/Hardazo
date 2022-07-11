import React from "react";
import IMAGES from "../Assets/Images";
import PDF from "../Assets/Pdf";
import Img from "../Components/Img";
function Footer() {
  return (
    <>
      <hr className="hr-footer" />
      <div className="footer-container">
        <div className="footer-img">
          <Img image={IMAGES.logoFooter} />
        </div>
        <div className="content">
          <ul>
            <li></li>
            <li>
              <a id="politicaPrivacidad" href={PDF.politicaPrivacidad} target="blank">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <a id="instagram" href="https://www.instagram.com/hardazoskatezine/" target="blank">
            <Img image={IMAGES.instagram} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
