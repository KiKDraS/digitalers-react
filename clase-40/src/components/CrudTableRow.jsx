/*
    Se va a encargar de agregar la fila para cada dato y unos botones que permitan indicar que se quiere actualizar/borrar el dato
*/

export const CrudTableRow = ({ el, setCharacterToEdit, deleteCharacter }) => {
  const { name, house, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{house}</td>
      <td>
        <button
          className="btn btn-warning me-3"
          onClick={() => setCharacterToEdit(el)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={() => deleteCharacter(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};
