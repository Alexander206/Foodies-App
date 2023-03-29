import React from "react";

export const TargetFooter = ({ img, name, linkedin, github, instagram }) => {
  return (
    <section>
      <figure>
        <img src={img} />
      </figure>
      <span>{name}</span>
      <ul>
        <li>
          <a href={linkedin} target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href={github} target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </section>
  );
};
