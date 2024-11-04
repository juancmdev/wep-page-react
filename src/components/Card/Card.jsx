import React from "react";
import { productos } from "../../database/productos";

const Card = () => {
  return (
    <>
      <div className="container-md mx-auto ">
        <div className="grid grid-cols-2 gap-5 mt-10 mx-2">
          <img src={productos[0].img} alt={productos[0].alt} />
          <div>
            <h2 className="text-3xl text-center">{productos[0].nombre}</h2>
            <p className="text-2xl text-center">${productos[0].precio}</p>
            <button className="block mx-auto">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
