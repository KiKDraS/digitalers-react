import React from "react";

export const ComponenteHijo = ({ lista }) => {
  return (
    <>
      {lista.map((color, i) => (
        <h4 key={color + i}>{color}</h4>
      ))}
    </>
  );
};
