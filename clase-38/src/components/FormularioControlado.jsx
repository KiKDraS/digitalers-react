import React, { useState } from "react";

export const FormularioControlado = () => {
  const [name, setName] = useState("");
  const [validValue, setValidValue] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    //Actualizar el valor del State cuando cambie el value del input
    setName(value);

    // Validar el value
    const regExp = /^[a-zA-Z\s]+$/;
    const isValid = regExp.test(value); // boolean - true todo ok
    setValidValue(isValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        className={!validValue ? "error" : ""}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
