import { CicloDeVida } from "./components/CicloDeVida";
import { Formularios } from "./components/Formularios";
import { PeticionesAJAX } from "./components/PeticionesAJAX";

function App() {
  return (
    <>
      <Formularios />
      <br />
      <hr />
      <br />
      <CicloDeVida />
      <br />
      <hr />
      <br />
      <PeticionesAJAX />
    </>
  );
}

export default App;
