export const InputText = ({
  name,
  label,
  id,
  value,
  handleChange,
  type = "text",
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name} //name={props.name}
        className="form-control"
        id={id}
        value={value} //value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

/*
    const form = {
        name: "Pepe",
        house: "Ravenclaw"
    }
   

    console.log(form.name); - Pepe
    console.log(form["name"]); - Pepe

    console.log(form.house); - Ravenclaw
    console.log(form["house"]); - Ravenclaw

    const valorElegido = "name"
    console.log(form[valorElegido]); === console.log(form["name"]); - Pepe

    const nuevoValor = "house";
    console.log(form[nuevoValor]); === console.log(form["house"]); - Ravenclaw
*/

// child.props.name === "house"
// <InputText name="house" />

// child.props.name === "name"
// <InputText name="name" />

// child.props.name === "email"
// <InputText name="email" />

// child.props.name === "password"
// <InputText name="password" />
