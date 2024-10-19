import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfound />,
  },
  {
    path: "/productos",
    element: <Productos />,
    errorElement: <Notfound />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
    errorElement: <Notfound />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
    errorElement: <Notfound />,
  },
]);
