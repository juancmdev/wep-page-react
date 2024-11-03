import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";

import Home from "../pages/Home";
import Tienda from "../pages/Tienda";
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
        path: "/tienda",
        element: <Tienda />,
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
