import { Listado } from "./components/listado/Listado";
import { BarraLateral } from "./components/barra-lateral/BarraLateral";
import { Crear } from "./components/crear/Crear";
import { useState } from "react";
import { GiAbstract027 } from "react-icons/gi";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <>
      <div className="layout">
        {/*<!--Cabecera--> */}
        <header className="header">
          <div className="logo">
        <GiAbstract027 className="play"/>
          </div>

          <h1>MisPelis</h1>
        </header>
        {/*<!--Barra de navegación-->*/}
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>

        {/*<!--Contenido principal--> */}
        <section id="content" className="content">
          {/* <!--aqui van las listas de peliculas--> */}
          <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/*<!--Barra lateral-->*/}
        <aside className="lateral">
          <BarraLateral listadoState={listadoState} setListadoState={setListadoState}/>
          
          <Crear setListadoState={setListadoState}/>
        </aside>

        {/*<!--Pie de página-->*/}
        <footer className="footer">
          &copy; Mas Informacion - <a href="https://github.com/Silkaleex">Alejandro Pascual</a>
        </footer>
      </div>
    </>
  );
}

export default App;
