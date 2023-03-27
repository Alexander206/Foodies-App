import React, { useContext } from "react";
import { userContext } from "../routes/App";
import { Header } from "../containers/Header.jsx";
import { Footer } from "../containers/Footer.jsx";
import "../styles/pages/NewRecipe.scss";
import { CrearReceta } from "../components/CrearReceta.jsx";

export const NewRecipe = () => {
  const { user, authUser } = useContext(userContext);

  console.log(user);
  return (
    <>
      <Header />
      <CrearReceta />
      <Footer />
    </>
  );
};
