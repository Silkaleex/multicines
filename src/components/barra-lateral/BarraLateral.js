import React, { useState } from "react";

export const BarraLateral = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // crearEstado y actualizarlo
    setBusqueda(e.target.value);
    // console.log(setBusqueda);

    //filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    // console.log(pelis_encontradas)
    //Actualizar el estado del listado principal con lo que he logrado filtrar
    setListadoState(pelis_encontradas);
  };
  return (
    <>
      <div className="search">
        <h3 className="titulo-buscador">Buscador:</h3>
        {(noEncontrado == true && busqueda.length > 1) && (
          <span className="no-Encontrado">
            No se encontro ninguna coincidencia
          </span>
        )}
        <form>
          <input
            type="text"
            id="search_field"
            name="busqueda"
            autoComplete="off"
            onChange={buscarPeli}
          />
          <button id="search">Buscar</button>
        </form>
      </div>
    </>
  );
};
