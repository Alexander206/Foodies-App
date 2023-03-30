import React from "react";
import { useForm } from "react-hook-form";
import "../styles/components/crearReceta.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

export const CrearReceta = () => {
  //VARIABLES DEL MODAL
  const [show, setShow] = useState(false);
  //FORM
  const { register, handleSubmit } = useForm();
  const navigateTo = useNavigate();
  //TRAER ARREGLO DE RECETAS
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  const handleClose = () => {
    setShow(false);
    //REALIZAR REDIRECCIÓN A LA VISTA DE LA TABLA
    navigateTo("/TableRecipes");
  }

  const onSubmit = (data) => {
    //OBTENER ULTIMO ITEM PARA VER EL ID Y SUMARLE 1
    const lastItem = recipes[recipes.length - 1];
    data.id = lastItem.id + 1;
    //AGREGAR NUEVO DATO AL ARREGLO
    recipes.push(data);
    //ASIGNAR NUEVO VALOR DEL ARREGLO
    localStorage.setItem("recipes", JSON.stringify(recipes));
    //MOSTRAR MODAL DE CONFIRMACIÓN DE CREACIÓN
    setShow(true);
  };

  return (
    <>
      <div className="container-create">
        
        <div className='img_cuaderno'>
            <img className="imgrecetarios" src="/src/assets/img/recetarios.jpg" alt="" />
        </div>

        {/* <div className='row'> */}
        <div className='form_container text-center align-middle'>
          <article>
          <h2 className="title_new">
          ¿Have you already met our recipe book?
        </h2>
        <p className="title_new">
          Now we invite you to share new flavors with us so that we can do it.
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          
          <article>
            <label className="title_recipe">New Recipe</label>
            <input
              className="input_recipe"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <br />
            <label className="ingredients">Recipe Ingredients</label>
            <input
              className="input_ingredients"
              type="text"
              {...register("ingredients", {
                required: true,
              })}
            />
            <br />
            <label className="description">Description Recipe</label>
            <input
              className="input_description"
              type="text"
              {...register("description", {
                required: true,
              })}
            />
          </article>
          <input
            className="input_submit"
            type="submit"
            value="Add New Recipe"
          />
        </form>
          </article>
          {/* </div> */}
        </div>


        {/* MODAL */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>Record Added Successfully</Modal.Body>
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
