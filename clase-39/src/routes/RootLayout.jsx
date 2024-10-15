import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const RootLayout = () => {
  return (
    <section className="container-flui px-4 vh-100">
      <div className="row h-100">
        <div className="col col-2">
          <Sidebar />
        </div>
        <div className="col col-10">
          {/*<HomePage /> en la ruta misitio.com*/}
          {/*<ContactPage /> en la ruta misitio.com/contacto*/}
          <Outlet />
        </div>
      </div>
    </section>
  );
};
