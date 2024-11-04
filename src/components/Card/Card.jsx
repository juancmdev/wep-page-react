import React from "react";
import { productos } from "../../database/productos";

const Card = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2>{productos[0].nombre}</h2>
      </div>
    </>
  );
};

export default Card;
