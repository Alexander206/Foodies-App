import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../routes/App";
import { Header } from "../containers/Header.jsx";
import { Footer } from "../containers/Footer.jsx";
import { Receta } from "../components/Receta.jsx";
import { FormFiltro } from "../components/FormFiltro.jsx";
import { LoadingPage } from "../containers/LoadingPage.jsx";
import "../styles/pages/inicio.scss";

export const Inicio = () => {
  const { user } = useContext(userContext);

  const API = "https://www.themealdb.com/api/json/v2/9973533/randomselection.php";

  // Data de la API
  const [data, setdata] = useState([]);
  // Ingredientes disponibles [Traidos de la API]
  const [ingredients, setingredients] = useState([]);
  // Filtros seleccionados
  const [filtrerIgredients, setfiltrerIgredients] = useState([]);
  // Data que se renderiza
  const [recipes, setrRecipes] = useState([]);
  // Lista de los filtros mostrados
  const [showFiltrers, setShowFiltrers] = useState([]);

  // Lista de recetas
  let recetas = <h1>No hay data</h1>;

  // Llamado a la API y creación de
  useEffect(() => {
    (async () => {
      // LLamado a la API
      let res = await fetch(API);
      let response = await res.json();

      // Se guarda la data de la API en [data]
      setdata(response.meals);

      // Creando lista de ingredientes
      let resIngredients = response.meals.map((item) => [
        item.strIngredient1,
        item.strIngredient2,
        item.strIngredient3,
        item.strIngredient4,
        item.strIngredient5,
        item.strIngredient6,
        item.strIngredient7,
        item.strIngredient8,
        item.strIngredient9,
        item.strIngredient10,
        item.strIngredient11,
        item.strIngredient12,
        item.strIngredient13,
        item.strIngredient14,
        item.strIngredient15,
        item.strIngredient16,
        item.strIngredient18,
        item.strIngredient19,
        item.strIngredient20,
      ]);

      // Concatenando la lista de ingredientes
      resIngredients = [].concat(...resIngredients);

      // Eliminando items en blanco o nulos
      resIngredients = resIngredients.filter((item) => {
        if (item !== null) {
          if (item.length > 0) {
            return item;
          }
        }
      });

      // Eliminando ingredientes iguales
      resIngredients = resIngredients.filter((item, index, array) => array.indexOf(item) === index);

      // Organizando el array en orden alfabetico
      resIngredients = resIngredients.sort((a, b) => a.localeCompare(b));

      // Creando el elemento HTML para colocarlo dentro del buscador
      resIngredients = resIngredients.map((item) => <option key={item} value={item} />);

      // Guardandolo en el estado de los ingredientes
      setingredients(resIngredients);
    })();
  }, []);

  /* ---------- Renderiador de los productos --------------- */

  useEffect(() => {
    let arrayTemp = [];
    // Se crea un array de la data que coincide con el filtro
    if (filtrerIgredients.length > 0) {
      arrayTemp = data.filter((item) => {
        for (let propiedad in item) {
          if (filtrerIgredients.includes(item[propiedad])) {
            return true;
          }
        }
        return false;
      });
    } else {
      arrayTemp = data;
    }

    setrRecipes(arrayTemp);

    let filtrers = filtrerIgredients.map((item) => (
      <li key={item}>
        <button onClick={() => deleteFiltrer(item)}>{item}</button>
      </li>
    ));

    setShowFiltrers(filtrers);
  }, [ingredients, filtrerIgredients]);

  // Creando el componente de la receta
  recetas = recipes.map((item) => {
    return (
      <Receta
        key={item.idMeal}
        id={item.idMeal}
        name={item.strMeal}
        img={item.strMealThumb}
        category={item.strCategory}
        ingredient={[
          item.strIngredient1,
          item.strIngredient2,
          item.strIngredient3,
          item.strIngredient4,
          item.strIngredient5,
        ]}
        instruction={item.strInstructions}
        video={item.strYoutube}
        link={item.strSource}
        ciudad={item.strArea}
      />
    );
  });

  // Función para borrar el filtro
  const deleteFiltrer = (name) => {
    let array = filtrerIgredients.filter((item) => item !== name);
    setfiltrerIgredients(array);
  };

  return (
    <>
      <LoadingPage />
      <Header />
      <main className="main_inicio">
        <section className="fondo_banner">
          <figure>
            <h1>FOODIES APP</h1>
            <span>{user.auth ? `Welcome ${user.name}` : false}</span>
          </figure>
          <FormFiltro
            ingredients={ingredients}
            filtrerIgredients={filtrerIgredients}
            setfiltrerIgredients={setfiltrerIgredients}
          />
        </section>

        <section className="categorias">
          <article>
            <figure>
              <figcaption>Ingredients</figcaption>
            </figure>
          </article>

          <article className="">
            <ul className="ingredients">{showFiltrers.length ? showFiltrers : <button>All recipes</button>}</ul>
          </article>
        </section>

        <section className="recetas" id="recetas">
          {recetas}
        </section>
      </main>

      <Footer />
    </>
  );
};
