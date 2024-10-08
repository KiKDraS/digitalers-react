import React from "react";

const COLORES = ["Blanco", "Negro", "Azul", "Violeta", "Marrón"];

//agregarColor === Función Callback
//Función Callback -> Función que se pasa como Argumento de otra para que sea esta quien la ejecute
//Etapas de una función: Declaración y Ejecución
export const ComponenteHijo2 = ({ agregarColor, lista }) => {
  //El ComponenteHijo2 necesita la lista que tiene ComponentePadre

  return (
    <>
      {COLORES.map((color, i) => {
        if (lista.includes(color)) return <></>;

        return (
          <>
            <button key={color + i} onClick={() => agregarColor(color)}>
              Agregar {color} desde ComponenteHijo2
            </button>
            <br />
            <br />
          </>
        );
      })}
    </>
  );
};
