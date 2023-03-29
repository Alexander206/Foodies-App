import React from "react";
import { Header } from "../containers/Header.jsx";
import { Footer } from "../containers/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "../styles/pages/TableRecipes.scss";
import { EditarReceta } from "../components/EditarReceta.jsx";
import { useNavigate } from "react-router-dom";

export const TableRecipes = () => {
  // Simulated Data RECIPES
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")));
  const navigateTo = useNavigate();

  const handleDelete = (id) => {
    // Eliminamos el elemento con el id dado
    const newRecipes = recipes.filter(function (item) {
      return item.id !== id;
    });
    setRecipes(newRecipes);
    //ASIGNAR AL STORAGE EL NUEVO VALOR
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  };
  const handleEdit = (recipe) => {
    // Lanzar Edit
    navigateTo("/EditRecipe/" + recipe.id + "/edit");
  };
  return (
    <>
      <Header />
      <main className="main-table">
        <section className="container-table">
          <>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Recipe Name</th>
                  <th>Ingredients</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => (
                  <tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.name}</td>
                    <td>{recipe.ingredients}</td>
                    <td>{recipe.description}</td>
                    <td>
                      {" "}
                      <Button className="button-table" variant="primary" onClick={() => handleEdit(recipe)}>
                        Edit
                      </Button>
                      <br />
                      <br />
                      <Button className="button-table" variant="danger" onClick={() => handleDelete(recipe.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        </section>
      </main>
      <Footer />
    </>
  );
};
