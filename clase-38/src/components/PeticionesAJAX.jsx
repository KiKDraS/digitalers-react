import React, { useEffect, useState } from "react";

export const PeticionesAJAX = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Hacer la petición cuando se monta el componente
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      // Validación del response
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h2>Peticiones AJAX</h2>
      {users.map((users) => (
        <p key={users.id}>{users.name}</p>
      ))}
    </>
  );
};
