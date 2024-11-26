import React, { useState, useEffect } from "react";
import { productos } from "../database/productos.js";
import { Link } from "react-router-dom";

const Tienda = () => {
  const [productosListados, setProductosListados] = useState([]);

  useEffect(() => {
    setProductosListados(productos);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5">Tienda</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-14 gap-5">
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <Link to={producto.to} className="">
              <h2 className="h-10 text-xl">{producto.nombre}</h2>
              <img
                src={producto.img}
                className="mb-3 transition-all ease delay-75 hover:scale-105 cursor-pointer"
              />
            </Link>
            <h3>
              Precio: $
              <del className="line-through decoration-solidS">
                {producto.antes}{" "}
              </del>
              {" - "}
              <span className="text-lg cursor-pointer">
                Promo: ${producto.precio}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tienda;
