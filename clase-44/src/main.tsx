import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { TasksProvider } from "./contexts/TaskContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksProvider>
      <App title="Aplicación TypeScript" />
    </TasksProvider>
  </StrictMode>
);
