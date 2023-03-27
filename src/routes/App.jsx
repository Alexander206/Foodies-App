import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import { Inicio } from "../pages/Inicio.jsx";
import { Login } from "../pages/Login.jsx";
import { Profile } from "../pages/Profile.jsx";
import { SobreNosotros } from "../pages/SobreNosotros.jsx";
import { NewRecipe } from "../pages/NewRecipe.jsx";
import { TableRecipes } from "../pages/TableRecipes.jsx";
import { EditarReceta } from "../components/EditarReceta.jsx";
import { NotFound } from "../pages/NotFound.jsx";

// Archivos
import initialRecipe from "../_data/recipes.json";

// * --- Componente --- * //

// Contexto de usuario
export const userContext = createContext();

function App() {
  //MANEJAR ESTRUCTURA JSON (Común en APIs)
  localStorage.setItem("recipes", JSON.stringify(initialRecipe));

  let dataLocal = JSON.parse(localStorage.getItem("users"));

  if (!dataLocal) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          name: "user",
          lastname: "admin",
          email: "user@admin.com",
          password: "123",
          confirm: "123",
          auth: false,
        },
      ])
    );
  }

  // Autenticación de usuario
  const [user, setUser] = useState({ auth: false });

  const authUser = (name, email, auth) => {
    setUser({ name, email, auth });
  };

  return (
    <userContext.Provider value={{ user, authUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/NewRecipe" element={user.auth ? <NewRecipe /> : <Login />} />
          <Route path="/EditRecipe/:id/edit" element={user.auth ? <EditarReceta /> : <Login />} />
          <Route path="/TableRecipes" element={user.auth ? <TableRecipes /> : <Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={user.auth ? <Profile /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
