import React, { useState, useEffect } from "react";
import { productos } from "../database/productos.js";

const Tienda = () => {
  const [productosListados, setProductosListados] = useState([]);

  useEffect(() => {
    setProductosListados(productos);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Tienda</h1>
      <ul>
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} width={300} />
            <h3>Precio: $ {producto.precio}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tienda;
