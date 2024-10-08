import { ComponentePadre } from "./components/ComponentePadre";
import { MiComponente } from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <MiComponente texto="Hola soy una prop" />
      {/* <MiComponente texto="Cada vez que usamos el Componente MiComponente" />
      <MiComponente texto="Se puede modificar el valor asignado a la prop" /> */}
      <ComponentePadre />
    </div>
  );
}

export default App;
