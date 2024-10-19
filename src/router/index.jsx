import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";

import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
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
    ],
  },
]);
