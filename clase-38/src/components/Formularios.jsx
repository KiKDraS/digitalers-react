import React from "react";
import { FormularioNoControlado } from "./FormularioNoControlado";
import { FormularioControlado } from "./FormularioControlado";

export const Formularios = () => {
  return (
    <div>
      <h2>Formularios NO controlados</h2>
      <p>
        Un formulario no controlado, es aquel que se salta el control del
        VirtualDOM al momento de tomar los datos que el usuario ingresa
      </p>
      <FormularioNoControlado />
      <h2>Formularios Controlados</h2>
      <p>
        Un formulario controlado, es aquel que tiene control sobre los valores
        ingresados en los inputs (el value del input es parte del State de
        React) y los estados de las variables de la aplicación. Esto permite una
        interacción inmediata con el usuario
      </p>
      <FormularioControlado />
    </div>
  );
};
