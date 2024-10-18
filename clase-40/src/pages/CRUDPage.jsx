import { useEffect, useState } from "react";
import { CrudForm } from "../components/CrudForm";
import { CrudTable } from "../components/CrudTable";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

/*
    CRUD (ABM) - Una aplicación capaz de realizar 4 acciones
        -> Crear (Create)
        -> Leer (Read)
        -> Actualizar (Update)
        -> Borrar (Delete)

    En Front End se divide en 2
        -> 1 - CRUD a nivel visual
        -> 2 - CRUD a nivel API REST    
*/

const url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

export const CRUDPage = () => {
  // state para indicar si quiere actualizar o crear
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [characters, setCharacters] = useState([]);
  const { data, loading, error } = useFetch(url);

  //useEffect(cb, []) - Permite realizar una acción dentro del Ciclo de Vida del Componente
  // useEffect(() => {
  //   getCharacters(); //Read
  // }, []); //Array vacío === Se ejecuta solo la primera vez que se monta

  useEffect(() => {
    if (data) setCharacters(data);
  }, [data]);

  /*
    1.- Inicialización de Componente (lectura de los valores de State que se escriben en el código)
    2.- Montaje (renderizar) en el DOM
    3.- Ejecución de la cb del useEffect
    4.- Ejecución de la función actualizadora setCharacters
    5.- Actualización del state
    6.- Desmontaje del componente 
    7.- Montaje (renderizar) del componente con el state actualizado
  */

  // VERBO REST: GET
  const getCharacters = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Error Fetch");

      const data = await res.json();
      setCharacters(data);
    } catch (error) {
      console.log(error);
      // setError(true);
    } finally {
      // setLoader(false);
      //Se va a ejecutar haya o no haya error
    }
  };

  // VERBO REST: POST
  const createCharacter = async (character) => {
    try {
      // Actualizar el servidor
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });

      //"Content-Type" -> Permite indicar qué tipo de dato voy a estar mandando
      //"application/json" -> Estoy mandando un dato de tipo JSON
      //JSON.stringify(character) -> Convierte el objeto JS en objeto JSON

      if (!res.ok) throw new Error("Error Fetch");

      const data = await res.json();
      // console.log(data);

      // Actualizar la vista de los personajes
      setCharacters([...characters, data]);
    } catch (error) {
      console.log(error);
      // Armar vista de error
    }
  };

  // VERBO REST: PUT
  const updateCharacter = async (character) => {
    try {
      // Actualizar el servidor
      const res = await fetch(`${url}/${character.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });

      //"Content-Type" -> Permite indicar qué tipo de dato voy a estar mandando
      //"application/json" -> Estoy mandando un dato de tipo JSON
      //JSON.stringify(character) -> Convierte el objeto JS en objeto JSON

      if (!res.ok) throw new Error("Error Fetch");

      const data = await res.json();

      // Actualizar la vista de los personajes
      const newCharacters = characters.map((element) =>
        element.id === data.id ? data : element
      );
      setCharacters(newCharacters);
    } catch (error) {
      console.log(error);
      // Armar vista de error
    }
  };

  // VERBO REST: DELETE
  const deleteCharacter = async (id) => {
    try {
      // Actualizar el servidor
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error Fetch");

      const data = await res.json();
      // console.log(data);

      // Actualizar la vista de los personajes
      const newCharacters = characters.filter(
        (element) => element.id !== data.id
      );
      setCharacters(newCharacters);
    } catch (error) {
      console.log(error);
      // Armar vista de error
    }
  };

  return (
    <>
      <CrudForm
        characterToEdit={characterToEdit}
        setCharacterToEdit={setCharacterToEdit}
        createCharacter={createCharacter}
        updateCharacter={updateCharacter}
      />
      {error && (
        <span className="fs-3 text-danger pb-4">
          Hubo un error en la obtención de los datos
        </span>
      )}
      {loading ? (
        <Loading />
      ) : (
        <CrudTable
          characters={characters}
          setCharacterToEdit={setCharacterToEdit}
          deleteCharacter={deleteCharacter}
        />
      )}
      {/* {error ? (
        <span>Hubo un error en la obtención de los datos</span>
      ) : (
        <CrudTable
          characters={characters}
          setCharacterToEdit={setCharacterToEdit}
          deleteCharacter={deleteCharacter}
        />
      )} */}
    </>
  );
};
