import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "añadir peliculas";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;
  const conseguirDatosForm = (e) => {
    e.preventDefault();
    //preventDefault prevee o evita el funcionamiento por defecto del formulario en si.
    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // alert(`${titulo} - ${descripcion}`)

    //crear objeto de pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //Guardar Estado
    setPeliState(peli);
    console.log(peliState);

    //Actulizar estado del listado principal
    setListadoState(elementos=>{
      return[...elementos,peli]
    });

    //Guardar Almacenamiento Local
    GuardarEnStorage("pelis", peli);
    // GuardarEnStorage("copia_datos",peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        {/* {peliState.titulo} */}
        <strong>
          {" "}
          {titulo && descripcion && `creastes la pelicula: ${titulo}`}
        </strong>
        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="title" name="titulo"placeholder="Titulo" />
          <textarea
            id="description"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};
