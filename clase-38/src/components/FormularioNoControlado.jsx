import React, { useRef } from "react";

/*
    useRef 
        -> Mecanismo que permite saltar el trabajo del VirtualDOM para interactuar directamente con el Nodo del DOM
        -> Genera un objeto que tiene una sola clave: current
            -> null (valor inicial): No existe el elemento en DOM real
            -> Objeto HTML del Nodo con el que queremos interactuar
        -> IMPORTANTE - Cuando trabajamos con el useRef es posible que obtengamos valores desactualizados    
*/

export const FormularioNoControlado = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Paso 3 - Manipular el value del input
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" id="name" ref={inputRef} />{" "}
      {/*Paso 1 - Escribir*/}
      <button type="submit">Enviar</button>
      {/*Paso 2 - Escribir*/}
    </form>
  );
};
