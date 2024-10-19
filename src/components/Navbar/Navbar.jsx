import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
