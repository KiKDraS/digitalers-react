import React, { useEffect, useState } from "react";
import { CrudForm } from "../components/CrudForm";
import { CrudTable } from "../components/CrudTable";
import { data } from "../data/characters";

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

export const CRUDPage = () => {
  // state para indicar si quiere actualizar o crear
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [characters, setCharacters] = useState([]);

  //useEffect(cb, []) - Permite realizar una acción dentro del Ciclo de Vida del Componente
  useEffect(() => {
    setCharacters(data); //Read
  }, []); //Arra vacío === Se ejecuta solo la primera vez que se monta

  /*
    1.- Inicilización de Componente (lectura de los valores de State que se escriben en el código)
    2.- Montaje (renderizar) en el DOM
    3.- Ejecución de la cb del useEffect
    4.- Ejecución de la función actualizadora setCharacters
    5.- Actualización del state
    6.- Desmontaje del componente 
    7.- Montaje (renderizar) del componente con el state actualizado
  */

  //  createCharacter({name: "pepe", house: "pepe"});
  const createCharacter = (character) => {
    character.id = characters.length + 1; //Simular el trabajo del Servidor para crear el id
    setCharacters([...characters, character]);
  };

  //   updateCharacter({id: 1, name: "pepe", house: "pepe"});
  const updateCharacter = (character) => {
    const newCharacters = characters.map((element) =>
      element.id === character.id ? character : element
    );
    setCharacters(newCharacters);
  };

  //   deleteCharacter(1);
  const deleteCharacter = (id) => {
    const newCharacters = characters.filter((element) => element.id !== id);
    setCharacters(newCharacters);
  };

  return (
    <>
      <CrudForm
        characterToEdit={characterToEdit}
        createCharacter={createCharacter}
      />
      <CrudTable
        characters={characters}
        setCharacterToEdit={setCharacterToEdit}
      />
    </>
  );
};
