import React, { useState } from "react";

/*
    Se va a encargar de obtener los datos para poder crear/actualizar
*/

const initialState = {
  name: "",
  house: "",
  id: null,
};

export const CrudForm = ({ characterToEdit, createCharacter }) => {
  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCharacter(form);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {};

  return (
    <div className="mb-4">
      <h3>{characterToEdit ? "Editar" : "Agregar"}</h3>
      <form className="p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
          className="me-4 row mb-3"
        />
        <input
          type="text"
          name="house"
          placeholder="Casa"
          onChange={handleChange}
          value={form.house}
          className="me-4 row mb-3"
        />
        <input type="submit" value="Enviar" className="me-2 btn btn-success" />
        <input
          type="reset"
          value="Limpiar"
          className="btn btn-danger"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};
