import React from "react";
import TagManager from "react-gtm-module";
import PDF from "../Assets/Pdf";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";

const tagManagerArgs = {
  gtmId: "GTM-NFT9XL8",
};
const initGA = () => {
  if (getCookieConsentValue("hardazoCookies") === "true") {
    TagManager.initialize(tagManagerArgs);
  }
};

function CookieBanner(props) {
  return (
    <>
      {initGA()}
      <CookieConsent
        cookieName="hardazoCookies"
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Solo las necesarias"
        style={{
          fontSize: "18px",
          display: "block",
          color: "#FFFFFF",
          background: "#2B373B",
        }}
        buttonStyle={{
          background: "#ff6325",
          color: "#FFFFFF",
          fontSize: "13px",
        }}
        declineButtonStyle={{
          background: "#2B373B",
          color: "#ff6325",
          fontSize: "13px",
        }}
        flipButtons
        overlay
        expires={150}
        enableDeclineButton
        onAccept={() => {
          initGA();
        }}
      >
        Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio.{" "}
        <a
          href={PDF.politicaPrivacidad}
          target="blank"
          style={{ fontSize: "10px", color: "#ff6325" }}
        >
          Leer más.
        </a>
      </CookieConsent>
    </>
  );
}

export default CookieBanner;
