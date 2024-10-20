import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex justify-evenly items-center">
      <div className="flex flex-col">
        <div></div>
        <a
          href="#"
          className="text-xs underline hover:text-yellow-400 cursor-pointer tracking-wider mb-1"
        >
          Lo nuevo
        </a>
        <NavLink
          to="/Contacto"
          className={({ isActive }) =>
            isActive
              ? "text-xs text-yellow-400 transition ease-in-out delay-[0.1s] mb-1"
              : "text-xs text-black underline mb-1 hover:text-yellow-400"
          }
          // className="text-xs underline hover:text-yellow-400 cursor-pointer mb-1 tracking-wider"
        >
          Contáctanos
        </NavLink>
        <div className="flex items-center">
          <div className="text-yellow-400 bg-black w-7 h-7 flex justify-center items-center rounded-full hover:text-white cursor-pointer ">
            <i class="fa-solid fa-angle-up"></i>
          </div>

          <p className="text-xs ml-1 tracking-wider">Volver arriba</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-white w-[25px] h-[25px] hover:bg-yellow-400 cursor-pointer">
          <i class="fa-brands fa-square-github text-3xl"></i>
        </div>
        <div className="flex justify-center items-center bg-white w-[25px] h-[25px] hover:bg-yellow-400 cursor-pointer">
          <i class="fa-brands fa-linkedin text-3xl"></i>
        </div>
        <div className="flex justify-center items-center bg-white w-[25px] h-[25px] hover:bg-yellow-400 cursor-pointer">
          <i class="fa-brands fa-square-youtube text-3xl "></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
