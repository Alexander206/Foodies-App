import React, { useState, useContext } from "react";
import { userContext } from "../routes/App";
import logo from "../assets/document/chef.png";
import { Link } from "react-router-dom";
import "../styles/containers/header.scss";
import Dropdown from "react-bootstrap/Dropdown";

export const Header = () => {
  const { user, authUser } = useContext(userContext);

  console.log(user.auth);

  let btnUser = user.auth ? (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <ion-icon name="person-circle-outline"></ion-icon>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link className="iniciar" to="/Profile">
            <ion-icon name="person-outline"></ion-icon> My profile
          </Link>
          <button
            onClick={() => {
              authUser({ auth: false });
            }}
          >
            <ion-icon name="log-out-outline"></ion-icon> Log Out
          </button>
        </Dropdown.Menu>
      </Dropdown>
    </>
  ) : (
    <>
      <Link className="iniciar" to="/Login">
        <ion-icon name="person-circle-outline"></ion-icon>
      </Link>
    </>
  );

  let showRecipes = user.auth ? (
    <>
      <Link className="navegacion_item" to="/NewRecipe">
        NewRecipe
      </Link>
      <Link className="navegacion_item" to="/TableRecipes">
        Table Recipes
      </Link>
    </>
  ) : (
    false
  );

  const [header, setheader] = useState("close");

  const openHeader = () => {
    header === "close" ? setheader("open") : setheader("close");
  };

  return (
    <>
      <header className="header">
        <figure className="logo">
          <img className="img-chef" src={logo} alt="chef" />
          <h1 className="titulo_foodiesapp">
            Foodies<span>App</span>
          </h1>
        </figure>

        <nav className={`navegacion ${header}`}>
          <button className="btn_header" onClick={openHeader}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>

          <Link className="navegacion_item" to="/">
            Home
          </Link>

          {showRecipes}

          <Link className="navegacion_item" to="/SobreNosotros">
            About
          </Link>
        </nav>

        <section className="botones">
          {btnUser}

          <button className="btn_menu" onClick={openHeader}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </section>
      </header>
    </>
  );
};
