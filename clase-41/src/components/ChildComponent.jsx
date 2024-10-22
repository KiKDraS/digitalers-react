import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const ChildComponent = () => {
  const { form } = useContext(FormContext);

  return (
    <div>
      <h4>Nombre:</h4>
      <span>{form.name}</span>
      <h4>Casa:</h4>
      <span>{form.house}</span>
    </div>
  );
};
