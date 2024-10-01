import { useState } from "react";
import reactLogo from "./assets/react.svg"; //Con punto carpeta src
import viteLogo from "/vite.svg"; //Sin punto carpeta public
import "./App.css";
import "./otro.css";
import { Link } from "./components/Link";

//Punto de entrada de la vista
function App() {
  // Destructurar array de 2 posiciones (tupla)
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <Link href="https://vitejs.dev" src={viteLogo} alt="Vite logo" />
        <Link
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className="react"
        />
      </div>
      <h1>Vite + React</h1>
      <div className="app__card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
