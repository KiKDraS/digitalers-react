import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { InputText } from "./InputText";
import { OtroContext } from "../contexts/OtroContext";

export const AgeForm = () => {
  const { form, handleChange } = useContext(FormContext);
  const { users } = useContext(OtroContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputText
        name="age"
        label="Edad"
        id="age"
        value={form.age}
        handleChange={handleChange}
      />
    </form>
  );
};
