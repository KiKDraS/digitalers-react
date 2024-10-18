import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ErrorPage } from "./pages/ErrorPage";
import { PATH } from "./routes/PATH";
import { CRUDPage } from "./pages/CRUDPage";

/*
  BrowserRouter - Encargado de indicar qué tiene que montarse para cada ruta
    -> createBrowserRouter([{}])
      -> Cada objeto representa una ruta
        -> path === ruta (ej /, /contacto, /listas)
          -> / === misitio.com/
          -> /contacto === misitio.com/contacto
          -> /listas === misitio.com/lista
        -> element === Componente que tiene que montarse para esa ruta  
        -> children === Rutas hijas de esta ruta
          -> Array de objetos que representan una ruta
            -> {path: "", element: <Componente />}
  RouterProvider - Encargado de guardar y usar las rutas creadas en el BrowserRouter     
    -> Outlet - Componente que se utiliza para indicar dónde dentro del Layout se tiene que renderizar(montar) el Componente que representa la page

  Moverse dentro de la App
    -> Link
      -> equivalente a elemento a de HTML para las rutas de react-router-dom
      -> to === ruta la que tiene que re-dirigir
    -> NavLink  
      -> equivalente a elemento a de HTML para las rutas de react-router-dom
      -> to === ruta la que tiene que re-dirigir  
      -> Permite aplicar una función para cambiar los estilos del elemento que representa la ruta actual
*/

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.CONTACT, element: <ContactPage /> },
      { path: PATH.CRUD, element: <CRUDPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
