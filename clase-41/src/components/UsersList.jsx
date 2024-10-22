import { useContext } from "react";
import { OtroContext } from "../contexts/OtroContext";

export const UsersList = () => {
  const { users } = useContext(OtroContext);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};
