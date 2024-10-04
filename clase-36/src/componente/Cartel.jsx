import "./Cartel.css";
import { Button } from "./Button";
import { useState } from "react";

/*
    Funcionalidad del Componente Cartel
        -> El cartel debe arrancar oculto
        -> Mostrar u ocultar un cartel
        -> Para mostrar el cartel, el usuario debe hacer click en un botón
        -> Para ocultar el cartel, el usuario debe hacer click en otro botón

    React v16.8
        => Hooks - Funciones que permiten interactuar con elementos de React
            -> useState - Permite crear y manipular un valor de state
                -> retorna una tupla (array de 2 posiciones)
                    -> En la posición 0, se guarda el valor ACTUAL del State
                    -> En la posición 1, se guarda una función para modificar el valor del State
                -> Cuando la App recién arranca, el valor ACTUAL del State es el declarado en la función useState    
            -> useEffect    
    
    Renderizado Condicional
        -> Utilizar las variables de State para indicar qué elemento debe mostrarse en qué momento      
        
    Falsies
        -> null
        -> false
        -> 0
        -> -0
        -> NaN
        -> ""
        -> undefined    
    Truthy - Es todo dato que no sea Falsy    

    Condición AND
        -> 5 && null === false 
        -> false && Object === false  
        -> true && Object === true  
*/
export const Cartel = ({ text }) => {
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    //Quiero cambiar el valor ACTUAL del State
    setMostrar(true);
  };

  return (
    <div className="cartel">
      {mostrar && <p>{text}</p>}
      {mostrar ? (
        <Button text="Ocultar" handleClick={() => setMostrar(false)} />
      ) : (
        <Button text="Mostrar" handleClick={handleClick} />
      )}
    </div>
  );
};
