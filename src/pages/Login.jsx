import React, { useState } from "react";
import { Header } from "../containers/Header.jsx";
import { FormLogin } from "../components/FormLogin.jsx";
import { FormSignUp } from "../components/FormSignUp.jsx";
import { LoginBody } from "../components/LoginBody.jsx";
import { LoadingPage } from "../containers/LoadingPage.jsx";
import frutas from "../assets/img/frutasDesktop.svg";
import "../styles/pages/Login.scss";

export const Login = () => {
  // Función que abre el login
  const login = () => {
    setForm(<FormLogin back={back} />);
  };

  // Función que abre el registro
  const signup = () => {
    setForm(<FormSignUp back={back} login={login} />);
  };

  // Función que regresa al inicio
  const back = () => {
    setForm(<LoginBody login={login} signup={signup} />);
  };

  // Estado que define el cuerpo del formulario
  const [form, setForm] = useState(<LoginBody login={login} signup={signup} />);

  // Estado para saber si es responsive
  const [responsive, setresponsive] = useState(window.innerWidth > 800);

  window.addEventListener("resize", () => {
    window.innerWidth > 800 ? setresponsive(true) : setresponsive(false);
  });

  if (responsive) {
    return (
      <section className="body_login desktop">
        <LoadingPage />
        <Header />
        <main>
          <section>
            <div>
              <span>WELCOME TO</span>
              <h1 className="titulo">FoodiesApp</h1>
            </div>
            <article>
              <FormLogin back={back} />
              <FormSignUp back={back} login={login} />
            </article>
          </section>
          <figure>
            <img src={frutas} alt="" />
          </figure>
        </main>
      </section>
    );
  } else {
    return (
      <section className="body_login">
        <LoadingPage />
        <Header />
        <main>{form}</main>
      </section>
    );
  }
};
