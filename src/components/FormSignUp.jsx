import React from "react";
import logo from "../assets/document/chef.png";
import toast, { Toaster } from "react-hot-toast";

export const FormSignUp = ({ back, login }) => {
  const registrer = (event) => {
    event.preventDefault();

    // Guardo los datos entrantes del formulario en un objeto
    const data = {
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirm: event.target.confirm.value,
    };

    // Si ya existen datos en el LocalStornage los guardo dentro del array de objetos
    if (localStorage.length) {
      let dataLocal = JSON.parse(localStorage.getItem("users"));

      // Verifico si ya existe el usuario registrado
      let existe = dataLocal.find((user) => user.email === event.target.email.value) ? true : false;

      // Verificar la misma contraseña
      let contraseña = data.password === data.confirm;

      if (!existe && contraseña) {
        localStorage.setItem("users", JSON.stringify([...dataLocal, data]));
        login();
      } else if (!contraseña) {
        toast.error("Passwords must match", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "1.6rem",
          },
        });
      } else {
        toast.error("User already exists", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "1.6rem",
          },
        });
      }
    } else {
      localStorage.setItem("users", JSON.stringify([data]));
    }
  };

  return (
    <>
      <figure>
        <span>WELCOME TO</span>
        <h1 className="titulo">FoodiesApp</h1>
      </figure>

      <form className="form registrer" action="" id="form_registro" onSubmit={registrer}>
        <img className="img-chef img_login" src={logo} alt="chef" />

        <button className="btn_back" onClick={back}>
          <ion-icon name="arrow-undo-circle-outline"></ion-icon>
        </button>

        <article>
          <label htmlFor="name">
            <input type="name" name="name" placeholder="First name" required />
          </label>

          <label htmlFor="lastname">
            <input type="name" name="lastname" placeholder="Last name" required />
          </label>
        </article>

        <label htmlFor="email">
          <input type="email" name="email" placeholder="Email" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" placeholder="Password" required />
        </label>

        <label htmlFor="confirm">
          <input type="password" name="confirm" placeholder="Confirm password" required />
        </label>

        <label htmlFor="terms" className="terms">
          <input type="checkbox" name="terms" required />
          <span>
            I accept <a href="">Terms of use</a>
          </span>
        </label>

        <button type="submit" className="button">
          REGISTRER NOW
        </button>
      </form>
      <Toaster />
    </>
  );
};
