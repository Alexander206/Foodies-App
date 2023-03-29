import React from "react";

import "../styles/components/ModalReceta.scss";

export const ModalReceta = ({ id, name, video, instruction, link, ciudad }) => {
  let videoUrl = "";
  let videoEmbed = "";

  // Verifica si el enlace del video existe y asigna el valor de videoUrl
  if (video !== "") {
    const expresionRegular = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&|$)/;
    const coincidencia = video.match(expresionRegular);
    videoUrl = `https://www.youtube.com/embed/${coincidencia[1]}`;
  }

  // Verifica si videoUrl tiene un valor para crear el iframe del video o mostrar un mensaje de error
  if (videoUrl !== "") {
    videoEmbed = (
      <iframe
        className="video"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  } else {
    videoEmbed = <p>There is no video available</p>;
  }

  return (
    <section
      className="modal fade modal_receta"
      id={id}
      role="dialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <article className="modal-dialog modal-dialog-centered" role="document">
        <article className="modal-content">
          <main className="modal-body">
            <h2>{name}</h2>

            <iframe
              className="video"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="container_options">
              <div className="container_location">
                <span>Location: {ciudad}</span>
              </div>
            </div>
            <p>{instruction}</p>
            <p>
              Do you want to know more?
              <a href={link} target="_blank">
                check here
              </a>
            </p>
          </main>
          <footer className="modal-footer">
            <button data-dismiss="modal">Close</button>
          </footer>
        </article>
      </article>
    </section>
  );
};
