import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar h-14 text-xl border-slate-400 border-[1px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-black transition ease-in-out delay-50w-auto h-auto px-4 py-1.5"
              : "text-black w-auto h-auto px-4 py-1.5"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/tienda"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-black transition ease-in-out delay-50w-auto h-auto px-4 py-1.5"
              : "text-black w-auto h-auto px-4 py-1.5"
          }
        >
          Tienda
        </NavLink>
        <NavLink
          to="/servicios"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-black transition ease-in-out delay-50 w-auto h-auto px-4 py-1.5"
              : "text-blackw-auto h-auto px-4 py-1.5"
          }
        >
          Servicios
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-black transition ease-in-out delay-50 w-auto h-auto px-4 py-1.5"
              : "text-black w-auto h-auto px-4 py-1.5"
          }
        >
          Contacto
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
