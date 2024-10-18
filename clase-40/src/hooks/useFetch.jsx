/*
    Los Hooks son funciones que pueden hacer uso de las características de React (useEffect, useState, etc)
    Reglas de los Hooks
        -> Los nombres deben empezar con use (ej. useFetch, useWindowSize, useTimer, etc)
        -> Los Hooks solo pueden ser utilizados dentro de otros hooks, componentes funcionales o Context API
*/

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error al realizar la petición: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
