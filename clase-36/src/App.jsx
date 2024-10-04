import { Button } from "./componente/Button";
import { Cartel } from "./componente/Cartel";
import { Perfil } from "./componente/Perfil";

/*
  <></> -> Fragment 
    -> No genera una etiqueta HTML
*/

function App() {
  return (
    <>
      <Perfil />
      <Button text="Demo" />
      <Button text="Code" variant="secondary" />
      <Button text="Responsive" />
      <Button text="Javascript" variant="white" />
      <Button text="React" variant="white" />
      <hr style={{ width: "100%" }} />
      <Cartel text="Soy el texto" />
    </>
  );
}

export default App;
