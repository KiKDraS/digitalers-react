import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="d-flex flex-column align-items-center justify-content-center gap-3 vh-100">
      <h1>Oops!</h1>
      <p>Ocurrió un error inesperado</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};
