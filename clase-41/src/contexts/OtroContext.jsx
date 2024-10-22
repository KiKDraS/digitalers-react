import { createContext, useEffect, useMemo, useState } from "react";

// 1.- Crear el Contexto
const OtroContext = createContext();

// 2.- Crear el Provider

const OtroProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  const data = useMemo(() => ({ users }), [users]);

  return <OtroContext.Provider value={data}>{children}</OtroContext.Provider>;
};

// 3.- Exportar el Provider y el Contexto
export { OtroContext, OtroProvider };
