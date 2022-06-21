import React from "react";
import Buttons from "../Components/Buttons";
import IMAGES from "../Assets/Images";
import PDF from "../Assets/Pdf";

function SkatezineContent() {
  return (
    <>
      <div className="body-container">
        <div className="content-container">
          <div className="skatezine-section content-one">
            <div className="hardazo-star orange-star"></div>
            <div className="hardazo-star black-star"></div>
            <div className="hardazo-star white-star"></div>
            <div className="skatezine-container part-one" >
              <div className="skatezine-subcontainer">
                  <div className="text-container">
                    <h1>¡Bienvenidos!</h1>
                    <p className="desktop__text">
                      Esta skatezine ha nacido para apoyar toda iniciativa y/o
                      proyectos en torno al skate en Sevilla. Es hora de
                      reavivar la escena, hacernos notar y quemar las calles.
                    </p>
                    <p className="desktop__text">
                      ¡Gracias de corazón por comprar y apoyar a Hardazo!
                    </p>
                  </div>
                    <Buttons
                      name="Visualizar"
                      onClick={() => window.open(PDF.skatezineVol0, "blank")}
                    />
                </div>
                <div className="img-container">
                  <img
                    src={IMAGES.hardazoSkatezine}
                    alt="Hardazo Skatezine Vol.0"
                  />
                </div>
            </div>
          </div>
          <div className="skatezine-section content-two">
            <div className="hardazo-star orange-star"></div>
            <div className="hardazo-star black-star"></div>
            <div className="hardazo-star white-star"></div>
            <div className="skatezine-container part-two">
              <div className="skatezine-subcontainer">
                
              <div className="text-container">
                   
              <p className="desktop__text">
                "How to do" es un anexo a Hardazo que trata de traer a un skater
                para enseñar, de forma gráfica, a los más iniciados dos trucos y
                su especialidad a los más avanzados.
              </p>
                  </div>
                <Buttons
                  name="Visualizar"
                  onClick={() => window.open(PDF.howToDoVol0, "blank")}
                />
              </div>
              <div className="img-container">
                <img src={IMAGES.htdAnexoVol0} alt="Hardazo Skatezine Vol0" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkatezineContent;
