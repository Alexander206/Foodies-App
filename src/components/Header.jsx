import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "../pages/Inicio.jsx";
import { SobreNosotros } from "../pages/SobreNosotros.jsx";
import { Registrate } from "../pages/Registrate.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import "../styles/components/header.scss";
import logo from "../assets/document/chef.png";

export const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <figure className="logo">
          <img className="img-chef" src={logo} alt="chef" />
          <h1 className="titulo_sabrossapp">SABROSAPP</h1>
        </figure>
        <nav className="navegacion">
          <Link className="inicio" to="/Inicio">
            Inicio
          </Link>
          <Link className="sobre" to="/SobreNosotros">
            Sobre Nosotros
          </Link>
        </nav>
        <section className="botones">
          <Link className="iniciar" to="/Login">
            Iniciar Sesión
          </Link>
          <Link className="registrar" to="/Registrate">
            Registrate
          </Link>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
        <Route path="/Login" element={<Registrate />}></Route>
        <Route path="/Registrate" element={<Registrate />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
