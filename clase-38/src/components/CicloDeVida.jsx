import React, { useEffect, useState } from "react";
import { Cartel } from "./Cartel";

export const CicloDeVida = () => {
  // false === Valor Inicial del State === El valor que VirtualDOM lee en la inicialización
  const [mostrar, setMostrar] = useState(false);
  // valor inicial == hora en que se inicializa la app
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  /*
    useEffect(cb, [])
        => cb === Función que se va a ejecutar cuando se desate la actualización
            -> Es posible agregar un return para realizar una acción en la fase de Desmontaje. Siempre que almacenemos datos en memoria, usar el return para eliminar (ej. setTimeout, setInterval, addEventListener)
        => [] (Array de dependencias) - Controla CUÁNDO se va a desatar la actualización
            => [] - Quiero que se desate la actualización cuando el componente se monta por primera vez
            => [valorState] -  Quiero que se desate la actualización cuando el componente se monta por primera vez y cuando cambia el valorState
            => Puede no usarse Array de Dependencias, pero esto significa que SIEMPRE se va a desatar la actualización (osea siempre se ejecuta la cb). NO SE RECOMIENDA
        => Es posible tener más de un useEffect en el mismo componente            
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 5000);

    return () => {
      //Limpiar la memoria en la Fase de Desmontaje
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      //Limpiar la memoria en la Fase de Desmontaje
      clearInterval(interval);
    };
  }, [hora]);

  return (
    <>
      <h2>Ciclo de Vida del Componente</h2>
      <p>
        Todo componente permanecerá en el DOM según lo requiera la evaluación
        del State que realiza el VirtualDOM
      </p>
      <h4>Fases</h4>
      <ul>
        <li>
          Inicialización - Primera vez que el VirtualDOM lee el componente (la
          primera vez que se entra en la app). Nunca más vuelve a suceder
        </li>
        <li>
          Montaje - El VirtualDOM le entrega al DOM el HTML que tiene que
          mostrar. Sucede inmediatamente después de la inicialización y de la
          actualización
        </li>
        <li>
          Actualización - Sucede cuando se cambia el Valor del State. El
          componente con el valor viejo se desmonta y se monta el componente con
          el valor nuevo
        </li>
        <li>
          Desmontaje - Sucede en el momento en que el DOM está eliminando el
          componente con el valor viejo
        </li>
      </ul>
      <h4>Hook useEffect</h4>
      <p>
        Permite que el programador realice tareas en alguna de las fases del
        Ciclo de Vida del Componente. Es posible utilizar el useEffect porque
        existe el Ciclo de Vida del Componente
        <br />
        No ess obligatorio usarlo.
      </p>
      {mostrar && <Cartel />}
      <p>Hora: {hora}</p>
    </>
  );
};
