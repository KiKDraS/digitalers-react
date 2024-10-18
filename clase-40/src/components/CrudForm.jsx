import { useEffect, useState } from "react";

/*
    Se va a encargar de obtener los datos para poder crear/actualizar
*/

const initialState = {
  name: "",
  house: "",
  id: null,
};

export const CrudForm = ({
  characterToEdit,
  setCharacterToEdit,
  createCharacter,
  updateCharacter,
}) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (characterToEdit) setForm(characterToEdit);
    else setForm(initialState);
  }, [characterToEdit]); // El efecto se ejecuta la primera vez que se monta el componente y cuando cambia el valor almacenado en characterToEdit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) updateCharacter(form);
    else createCharacter(form);

    handleReset();
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setForm(initialState);
    setCharacterToEdit(null);
  };

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
