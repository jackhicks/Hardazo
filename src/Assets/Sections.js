import IMAGES from "./Images";
import PDF from "./Pdf";

const Sections = [
  {
    image: IMAGES.hardazoSkatezineVol0,
    pdf: PDF.hardazoSkatezineVol0,
    content: {
      header: "¡Bienvenidos!",
      text1:
        "Esta skatezine ha nacido para apoyar toda iniciativa y/o proyectos en torno al skate en Sevilla. Es hora de reavivar la escena, hacernos notar y quemar las calles.",
      text2: "¡Gracias de corazón por comprar y apoyar a Hardazo!",
    },
    id: "hardazoSkatezineVol0",
  },
  {
    image: IMAGES.htdAnexoVol0,
    pdf: PDF.htdAnexoVol0,
    content: {
      header: "",
      text1:
        '"How to do" es un anexo a Hardazo que trata de traer a un skater para enseñar, de forma gráfica, a los más iniciados dos trucos y su especialidad a los más avanzados.',
      text2: "",
    },
    id: "htdAnexoVol0",
  },
];
export default Sections;
