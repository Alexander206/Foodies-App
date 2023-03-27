import React from "react";
import logo from "../assets/document/chef.png";
import img from "../assets/img/frutas.svg";

export const LoginBody = ({ login, signup }) => {
  return (
    <>
      <figure>
        <img className="img-chef img_login" src={logo} alt="chef" />
        <span>WELCOME TO</span>
        <h1 className="titulo">FoodiesApp</h1>
      </figure>

      <article>
        <button className="btn" onClick={login}>
          Log In
        </button>
        <button className="btn" onClick={signup}>
          Sign Up
        </button>
      </article>

      <figure className="img">
        <p>Discover a wide variety of delicious dishes and satisfy your appetite with just one click.</p>
        <img src={img} alt="" />
      </figure>
    </>
  );
};
