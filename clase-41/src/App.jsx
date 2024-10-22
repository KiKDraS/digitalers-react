import { AgeForm } from "./components/AgeForm";
import { Composition } from "./components/Composition";
import { CompositionForm } from "./components/CompositionForm";
import { FatherComponent } from "./components/FatherComponent";
import { Form } from "./components/Form";
import { InputText } from "./components/InputText";
import { Texto } from "./components/Texto";
import { UsersList } from "./components/UsersList";
import { FormProvider } from "./contexts/FormContext";
import { OtroProvider } from "./contexts/OtroContext";

function App() {
  return (
    <section className="p-4 d-flex flex-column gap-4">
      {/* <Composition /> */}
      <Composition>
        <span>Soy span</span>
      </Composition>
      <Composition>
        <Texto />
      </Composition>
      <Composition>
        <Texto text="Soy otro texto" />
        <Texto text="Soy otro texto 1" />
        <Texto text="Soy otro texto 2" />
        <Texto text="Soy otro texto 3" />
      </Composition>
      <CompositionForm
        initialForm={{ name: "", house: "" }}
        handleSubmit={(e, form) => {
          e.preventDefault();
          console.log(form);
        }}
      >
        <InputText name="name" label="Nombre" id="nombre" />
        <InputText name="house" label="Casa" id="casa" />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </CompositionForm>
      <CompositionForm
        initialForm={{ user: "", password: "" }}
        handleSubmit={(e, form) => {
          e.preventDefault();
          console.log("Formulario de inicio de sesión", form);
        }}
      >
        <InputText name="user" label="Usuario" id="user" />
        <InputText
          name="house"
          label="Contraseña"
          id="password"
          type="password"
        />
        <button type="submit" className="btn btn-info">
          Iniciar sesión
        </button>
      </CompositionForm>
      <CompositionForm
        initialForm={{ age: "" }}
        handleSubmit={(e, form) => {
          e.preventDefault();
          console.log("Formulario de edad", form);
        }}
      >
        <InputText name="age" label="Edad" id="edad" />
        <button type="submit" className="btn btn-warning">
          Ingresar edad
        </button>
      </CompositionForm>
      {/*
        Para poder usar useContext, el componente tiene que ser hijo del componente que contiene al provider
        Todo componente que quiera usar el useContext debe ser children del correspondiente provider
      */}
      <FormProvider
        initialForm={{
          name: "",
          house: "",
        }}
      >
        <Form />
        <FatherComponent />
      </FormProvider>
      <OtroProvider>
        <FormProvider initialForm={{ age: "" }}>
          <AgeForm />
        </FormProvider>
        <UsersList />
      </OtroProvider>
    </section>
  );
}

export default App;
