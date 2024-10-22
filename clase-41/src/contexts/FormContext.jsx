import { createContext, useCallback, useMemo, useState } from "react";

// 1.- Crear el Contexto
const FormContext = createContext();

// 2.- Crear el Provider
const FormProvider = ({ children, initialForm }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  const data = useMemo(() => ({ form, handleChange }), [form, handleChange]);

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

// 3.- Exportar
export { FormContext, FormProvider };
