import React, { useState } from "react";
import { ComponenteHijo } from "./ComponenteHijo";
import { ComponenteHijo2 } from "./ComponenteHijo2";
import { ComponenteHijo3 } from "./ComponenteHijo3";

export const ComponentePadre = () => {
  const [lista, setLista] = useState(["Rojo", "Amarillo", "Verde"]);

  const agregarColor = (color) => {
    //...lista - Spreed Operator (copia los valores de la lista)
    //[...lista] - Crear un array que contenga una copia de los valores de la lista
    //[...lista, color] - Crear un array que contenga una copia de los valores de la lista y agregue al final el color que se recibe como Argumento
    setLista([...lista, color]);
    //agregarColor es una función que utiliza setLista para actualizar el Valor de State almacenado en lista
  };

  return (
    <div>
      <ComponenteHijo lista={lista} />
      {/* <button onClick={() => agregarColor("Naranja")}>Agregar Naranja</button> */}
      <br />
      <ComponenteHijo2 agregarColor={agregarColor} lista={lista} />{" "}
      {/*ComponenteHijo2({agregarColor, lista})*/}
      <ComponenteHijo3 agregarColor={agregarColor} />
    </div>
  );
};
