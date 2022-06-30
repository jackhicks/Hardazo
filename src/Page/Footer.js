import React from "react";
import IMAGES from "../Assets/Images";
import PDF from "../Assets/Pdf";
import Img from "../Components/Img";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
function Footer() {
  const gaEventTracker = useAnalyticsEventTracker("HardazoSkatezine");
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
              <a
                href={PDF.politicaPrivacidad}
                target="blank"
                onClick={() => gaEventTracker("privacyPolicy")}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <a
            href="https://www.instagram.com/hardazoskatezine/"
            target="blank"
            onClick={() => gaEventTracker("instagram")}
          >
            <Img image={IMAGES.instagram} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
