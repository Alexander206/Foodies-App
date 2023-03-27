import React from "react";

export const TagetAbout = ({ profesion, name, lastname, description, img, linkedin, github }) => {
  return (
    <section className="target">
      <article className="texto">
        <h2 className="titulo_profesion">{profesion}</h2>
        <h1 className="nombre_programador">
          {name} <br /> {lastname}
        </h1>
        <div className="separador" />
        <p className="descripcion">{description}</p>
      </article>

      <article className="imagen">
        <figure>
          <img className="img" src={img} alt="imagen" />
        </figure>
      </article>

      <article className="btns">
        <a className="a" target="_blank" href={linkedin}>
          <ion-icon name="briefcase-outline"></ion-icon> Portafolio
        </a>
        <a className="a" target="_blank" href={github}>
          <ion-icon name="briefcase-outline"></ion-icon> GitHub
        </a>
      </article>
    </section>
  );
};
