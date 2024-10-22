import React, { useState } from "react";

export const CompositionForm = ({ children, initialForm, handleSubmit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="w-50 mx-50 border border-secondary-subtle rounded-4 p-4 d-flex flex-column gap-4 shadow"
      onSubmit={(e) => handleSubmit(e, form)}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          handleChange,
          value: form[child.props.name],
        })
      )}
    </form>
  );
};

const EjemploForm = () => {
  const [form, setForm] = useState({
    name: "",
    house: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: "",
      house: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="house"
        value={form.house}
        onChange={handleChange}
      />
    </form>
  );
};
