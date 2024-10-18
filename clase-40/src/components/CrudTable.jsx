import { CrudTableRow } from "./CrudTableRow";

/*
    Se va a encargar de mostrar (leer) los datos
*/

export const CrudTable = ({
  characters,
  setCharacterToEdit,
  deleteCharacter,
}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Casa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {characters.length > 0 ? (
            characters.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setCharacterToEdit={setCharacterToEdit}
                deleteCharacter={deleteCharacter}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
