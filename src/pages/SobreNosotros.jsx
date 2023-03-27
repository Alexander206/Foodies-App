import React from "react";
import { Header } from "../containers/Header.jsx";
import fondo_jeisson from "../assets/img/fondo_jeisson.png";
import fondo_adriana from "../assets/img/fondo_adriana.png";
import fondo_wendy from "../assets/img/fondo_wendy.png";
import { LoadingPage } from "../containers/LoadingPage.jsx";
import { TagetAbout } from "../components/TagetAbout.jsx";
import "../styles/pages/sobreNosotros.scss";

export const SobreNosotros = () => {
  return (
    <section className="body_about">
      <LoadingPage />
      <Header />
      <article className="container_profile">
        <TagetAbout
          profesion="Web Developer FullStack"
          name="Jeisson Alexander"
          lastname="Gavilan Murcia"
          description="Soy entusiasta por aprender y usar nuevas tecnologías del desarrollo web, me apasiona el diseño, la
                  programación y la creación de productos digitales. Al ser Licenciando en Diseño Técnológico, mis
                  habilidades docente han fortalecido la comunicación, la dirección de grupos y la adaptabilidad."
          img={fondo_jeisson}
          linkedin="https://alexander206.github.io/"
          github="https://github.com/Alexander206"
        />
        <div className="separador" />
        <TagetAbout
          profesion="Fronted Developer"
          name="Adriana"
          lastname="Moreno Gutierrez"
          description="Desarrolladora Web Frontend junior, con conocimientos técnicos en: HTML, CSS, Javascript y React.
                  Formación en Cloud computing, Azure, AWS, Analítica de datos, ISO 27001, Scrum y Lean six sigma.
                  Experiencia en análisis, planeación y documentación de pruebas manuales, asegurando parametros de
                  calidad del software."
          img={fondo_adriana}
          linkedin="https://soyadrianamorenogutierrez.github.io/bit07me/"
          github="https://github.com/soyadrianamorenogutierrez"
        />
        <div className="separador" />
        <TagetAbout
          profesion="Diseñadora Gráfica, Desarrolladora frontend"
          name="Wendy Alejandra"
          lastname="Carlos Muñoz"
          description="Soy una persona proactiva, me gusta trabajar en equipo, con experiencia en el área de creación de
                  contenido para redes sociales, audiovisual y fotografía. Busco crecer de forma profesional y
                  desarrollar nuevas habilidades creativas."
          img={fondo_wendy}
          linkedin="https://wenaleja.github.io/bit07me/"
          github="https://github.com/wenaleja"
        />
      </article>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </section>
  );
};
