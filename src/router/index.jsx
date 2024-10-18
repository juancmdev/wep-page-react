import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);
