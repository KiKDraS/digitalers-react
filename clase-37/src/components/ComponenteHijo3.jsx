import React, { useState } from "react";

const COLORES = ["Celeste", "Blanco", "Bordó", "Beige"];

export const ComponenteHijo3 = ({ agregarColor }) => {
  const [colores, setColores] = useState(COLORES);

  const borrarBtn = (color) => {
    const updateColores = colores.filter((el) => el !== color);
    //filter agrega al nuevo array todos los elementos que hacen que la condición de true
    //Cuando usamos filter, asegurarnos que el true se de con los elementos que queremos dejar y no con el que queremos sacar
    setColores(updateColores);
  };

  const handleClick = (color) => {
    borrarBtn(color);
    agregarColor(color);
  };

  return (
    <>
      {colores.map((color, i) => {
        return (
          <>
            <button key={color + i} onClick={() => handleClick(color)}>
              Agregar {color} desde ComponenteHijo3
            </button>
            <br />
            <br />
          </>
        );
      })}
    </>
  );
};
