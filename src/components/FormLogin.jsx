import React, { useContext } from "react";
import { userContext } from "../routes/App";
import logo from "../assets/document/chef.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ back }) => {
  const { user, authUser } = useContext(userContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    if (localStorage.length) {
      let dataLocal = JSON.parse(localStorage.getItem("users"));

      let existe = dataLocal.find((user) => {
        return user.email === event.target.email.value && user.password === event.target.password.value;
      })
        ? true
        : false;

      let userData = dataLocal.find((user) => {
        return user.email === event.target.email.value;
      });

      if (existe) {
        authUser(`${userData.name} ${userData.lastname}`, userData.email, true);
        navigate("/");
      } else {
        toast.error("Incorrect data", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "1.6rem",
          },
        });
      }
    } else {
      console.log("Actualemnte no hay usuarios registrados");
    }
  };

  return (
    <>
      <figure>
        <span>WELCOME TO</span>
        <h1 className="titulo">FoodiesApp</h1>
      </figure>

      <form className="form" action="" id="form_login" onSubmit={login}>
        <img className="img-chef img_login" src={logo} alt="chef" />

        <button className="btn_back" onClick={back}>
          <ion-icon name="arrow-undo-circle-outline"></ion-icon>
        </button>

        <label htmlFor="email">
          <input type="email" name="email" placeholder="Email" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" placeholder="Password" required />{" "}
        </label>

        <button type="submit" className="Link">
          LOGIN
        </button>
      </form>

      <Toaster />
    </>
  );
};
