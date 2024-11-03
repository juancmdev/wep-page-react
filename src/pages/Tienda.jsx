import React, { useState, useEffect } from "react";
import { productos } from "../database/productos.js";

const Tienda = () => {
  const [productosListados, setProductosListados] = useState([]);

  useEffect(() => {
    setProductosListados(productos);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Tienda</h1>
      <ul className="grid grid-cols-4 m-14 gap-5">
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} />
            <h3>Precio: $ {producto.precio}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tienda;
