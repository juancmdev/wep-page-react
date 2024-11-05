import React from "react";
import { productos } from "../../database/productos";

const Card = () => {
  return (
    <>
      <div className="container mx-auto h-min">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 my-20">
          <img
            src={productos[0].img}
            alt={productos[0].alt}
            className="w-auto"
          />
          <div className="">
            <h2 className="text-3xl text-center mb-5">{productos[0].nombre}</h2>
            <div className="flex justify-center">
              <ul className="list-disc mx-4 mb-4">
                <li>Marca: HEAD</li>
                <li>Material: Compuesto</li>
                <li>Color: Lemon Tree</li>
                <li>Rango de edad: Adulto</li>
              </ul>
            </div>
            <p className="text-2xl text-center mb-1">
              Precio: <del>${productos[0].antes}</del>
            </p>
            <p className="text-2xl text-center mb-3">
              Paga: ${productos[0].precio}
            </p>
            <a
              href="https://mpago.li/2Hsm4KX"
              className="block mx-auto w-full md:w-60 lg:w-80 h-11 bg-black text-yellow-400 flex justify-center items-center"
              target="_blank"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
