import React from "react";

export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const tiutlo_componente = "Editar Pelicula";
  const guardarEdicion = (e, id) => {
    e.preventDefault(); //la pagina no actualizará

    // conseguir el target del evento
    let target = e.target;
    //buscar el inidice del objeto de la pelicula a actualizar
    const peliculas_almacenadas = conseguirPeliculas();
    const indice = peliculas_almacenadas.findIndex((peli) => peli.id === id);
    //findIndex me permite buscar por una condicion un objeto dentro de un array de objetos,
    // recorre cada uno de los elementos almacenados en ese array y itero con cada uno
    // console.log(peliculas_almacenadas)
    // console.log(indice)

    //Crear objeto con ese id de ese indice, titulo y descripción del formulario
    let peli_actualiza = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };
    // console.log(indice,peli)

    //Actualizar el elemento con ese indice
    peliculas_almacenadas[indice] = peli_actualiza;

    //Guardar el nuevo objeto de array en localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

    //Actualizar estados
    setListadoState(peliculas_almacenadas);
    setEditar(0);
  };
  return (
    <>
      <div className="edit_form">
        <h3 className="title">{tiutlo_componente}</h3>
        <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
          <input
            type="text"
            name="titulo"
            className="titulo_editado"
            defaultValue={peli.titulo}
          />
          <textarea
            name="descripcion"
            defaultValue={peli.descripcion}
            className="descripcion_editada"
          ></textarea>
          <input type="submit" className="editar" value="actualizar" />
        </form>
      </div>
    </>
  );
};

// defaultValue coge los datos por defecto, es decir en esta parte cogemos el titulo y descripcion que ya creamos anteriormente,
//  mostramos en el input ese texto para modificar lo que queremos cambiar por si nos equivocamos de texto
