export const GuardarEnStorage = (clave,elemento) => {
    //consegir los elementos que tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos)
    //comprobar si es un array
    if (Array.isArray(elementos)) {
      elementos.push(elemento);
    } else {
      elementos = [elemento];
    }
    //guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    //devolver objeto guardado
    return elemento;
    // localStorage.setItem("pelis", JSON.stringify[peli]);
  };