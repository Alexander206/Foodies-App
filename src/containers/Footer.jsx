import React from "react";
import "../styles/containers/footer.scss";
import Logo from "../assets/document/logoTecnoPower.png";
import { TargetFooter } from "../components/TargetFooter";

export const Footer = () => {
  return (
    <footer>
      <section className="logo_footer">
        <figure>
          <img src={Logo} alt="" />
        </figure>
      </section>

      <div className="divisor"></div>

      <section className="integrantes">
        <TargetFooter
          img="https://media.licdn.com/dms/image/D5603AQGR7ZPTAQvh9w/profile-displayphoto-shrink_400_400/0/1665088793878?e=1683158400&v=beta&t=_vKmIevoFEh6Ai-Hx5cEXpqpqWxe-qq3OfX95_S43CQ"
          name="Jeisson Gavilán"
          linkedin="https://www.linkedin.com/in/jeisson-alexander/"
          github="https://github.com/Alexander206"
        />
        <TargetFooter
          img="https://media.licdn.com/dms/image/C4E03AQFsVWNfdW2BSw/profile-displayphoto-shrink_800_800/0/1580384537409?e=1685577600&v=beta&t=0LDAf8N6tdn_DcaWYp0q6UlrTsUzSgd089n3C-lzoDg"
          name="Wendy Carlos"
          linkedin="https://www.linkedin.com/in/wendy-alejandra-carlos-mu%C3%B1oz/"
          github="https://github.com/wenaleja"
        />
        <TargetFooter
          img="https://media.licdn.com/dms/image/D4E03AQGpfbkQ0eO1OA/profile-displayphoto-shrink_800_800/0/1675216052678?e=1685577600&v=beta&t=paDKlKP8H9gxgE_LTnYU9YHNvpgbSxsK7uqZ6njW3Y8"
          name="Adriana Moreno"
          linkedin="https://www.linkedin.com/in/adrianamorenogutierrez/"
          github="https://github.com/soyadrianamorenogutierrez"
        />
      </section>

      <section className="derechos">
        <p>© 2023 Todos los derechos reservados.</p>
      </section>
    </footer>
  );
};
