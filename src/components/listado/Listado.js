import React, { useEffect, useState } from "react";
import { Editar } from "../editar/Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componente de listado de peliculas cargado!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };
  const borrarPeli = (id) => {
    alert(id);
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    //Filtrar peliculas
    let nuevo_array_peliculas = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    // console.log(pelis_almacenadas, nuevo_array_peliculas)
    //Actulizar listado state
    setListadoState(nuevo_array_peliculas);
    //Actulizar los datos en el storage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
  };
  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h2 className="title">{peli.titulo}</h2>
              <p className="description">{peli.descripcion}</p>
              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                {" "}
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/* aparece el formulario de editar */}
              {editar == peli.id && <Editar 
              peli={peli} 
              conseguirPeliculas={conseguirPeliculas}
              setEditar={setEditar}
              setListadoState={setListadoState}
              />}
            </article>
          );
        })
      ) : (
        <h2>No Hay peliculas para mostrar</h2>
      )}
    </>
  );
};
