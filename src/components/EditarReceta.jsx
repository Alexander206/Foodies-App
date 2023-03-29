import React from "react";
import { useForm } from "react-hook-form";
import "../styles/components/EditarReceta.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Header } from "../containers/Header.jsx";
import { Footer } from "../containers/Footer.jsx";
import { useParams } from "react-router-dom";

export const EditarReceta = () => {
  const { id } = useParams();
  //Traer el ITEM DEL ID
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  // Eliminamos el elemento con el id dado
  const recipe = recipes.filter(function (item) {
    return item.id === parseInt(id);
  })[0];
  //VARIABLES DEL MODAL
  const [show, setShow] = useState(false);
  //FORM
  const { register, handleSubmit } = useForm();
  const navigateTo = useNavigate();

  const handleClose = () => {
    setShow(false);
    //REALIZAR REDIRECCIÓN A LA VISTA DE LA TABLA
    navigateTo("/TableRecipes");
  };

  const onSubmit = (data) => {
    data.id = parseInt(id);
    //MODIFICAR DATOS
    let foundIndex = recipes.findIndex((item) => item.id == parseInt(id));
    recipes[foundIndex] = data;
    //ASIGNAR NUEVO VALOR DEL ARREGLO
    localStorage.setItem("recipes", JSON.stringify(recipes));
    //MOSTRAR MODAL DE CONFIRMACIÓN DE CREACIÓN
    setShow(true);
  };

  return (
    <>
      <Header />
      <div className="container-edit">
        <h2 className="title_new">Edit Recipe</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <article>
            <label className="title_recipe">Recipe</label>
            <input
              className="input_recipe"
              type="text"
              {...register("name", {
                required: true,
                value: recipe.name,
              })}
            />
            <br />
            <label className="ingredients">Recipe Ingredients</label>
            <input
              className="input_ingredients"
              type="text"
              {...register("ingredients", {
                required: true,
                value: recipe.ingredients,
              })}
            />
            <br />
            <label className="description">Description Recipe</label>
            <textarea
              className="input_description-edit"
              type="area"
              {...register("description", {
                required: true,
                value: recipe.description,
              })}
            />
          </article>
          <input className="input_submit" type="submit" value="Edit Recipe" />
        </form>
        <Footer />
        {/* MODAL */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>Record Edited Successfully</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
