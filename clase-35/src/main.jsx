import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Punto de entrada de la app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* Ejecutar la función App */}
  </StrictMode>
);
