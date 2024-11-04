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
      <ul className="grid grid-cols-4 m-14 gap-5">
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <h2 className="h-10">{producto.nombre}</h2>
            <img src={producto.img} />
            <h3>Precio: $ {producto.precio}</h3>
            <Link to={producto.to}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tienda;
