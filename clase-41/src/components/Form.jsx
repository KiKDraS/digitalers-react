import { useContext } from "react";
import { InputText } from "./InputText";
import { FormContext } from "../contexts/FormContext";

export const Form = () => {
  const { form, handleChange } = useContext(FormContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputText
        name="name"
        label="Nombre"
        id="nombre"
        value={form.name}
        handleChange={handleChange}
      />
      <InputText
        name="house"
        label="Casa"
        id="casa"
        value={form.house}
        handleChange={handleChange}
      />
    </form>
  );
};
