import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../routes/PATH";

const routes = [
  { path: PATH.HOME, name: "Home" },
  { path: PATH.CONTACT, name: "Contacto" },
  { path: PATH.CRUD, name: "Crud" },
  { path: "/otro", name: "Otro" },
];

export const Sidebar = () => {
  return (
    <div className="pe-2 border-end border-secondary-subtle h-100">
      <nav className="nav flex-column py-2">
        {routes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) =>
              isActive
                ? "nav-link bg-primary text-white rounded-3 fw-bolder"
                : "nav-link"
            }
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
