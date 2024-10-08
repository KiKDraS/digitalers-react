import React, { useState } from "react";

/*
    Props (Objeto props)
        -> Sirve para recibir valores distintos en cada utilización del Componente
        -> Props === Parámetros de una función

    State (Objeto state)    
        -> Sirve para avisarle a React que tiene que actualizar lo que se está mostrando en pantalla
        -> Siempre que usamos useState, agregamos un Valor de State
        -> Todo Valor de State tiene un estado inicial (lo que escribimos cuando pusimos el useSate)
        -> Actualizar el State mediante callback se recomienda para aquellos casos en los que se pueda perder el Valor Actual del State
        -> El Valor Actual del State se conserva siempre que la página este abierta. Si se cierra o se recarga, retorna al valor inicial (lo que escribimos cuando pusimos el useState)

    Props y State son propios de CADA USO del Componente    
*/

export const MiComponente = ({ texto }) => {
  const [mostrar, setMostrar] = useState(false);
  const [num, setNum] = useState(0);

  const handleSumar = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      {mostrar && <p>{texto}</p>}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
      {/* <button onClick={() => setMostrar(() => (mostrar ? false : true))}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button> */}
      {/* <button onClick={() => (mostrar ? setMostrar(false) : setMostrar(true))}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button> */}
      <hr />
      <br />
      <h3>{num}</h3>
      <br />
      <button onClick={handleSumar}>Sumar 1</button>
    </div>
  );
};
