import React from "react";
import { productos } from "../../database/productos";

const Card = (props) => {
  const lista = props.caracteristicas.map((element, index) => {
    return <li key={index}>{element}</li>;
  });

  return (
    <>
      <div className="container-product mx-auto h-min w-[90%]" style={{}}>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 my-20">
          <img
            src={props.src}
            alt={productos[0].alt}
            className="m-auto"
            width={500}
          />
          <div className="">
            <h2 className="text-3xl text-center mb-3">{props.nombre}</h2>
            <div className="flex justify-center">
              <ul className="list-disc mx-4 mb-4">
                {lista}
                {/* <li>Marca: HEAD</li>
                <li>Material: Compuesto</li>
                <li>Color: Lemon Tree</li>
                <li>Rango de edad: Adulto</li> */}
              </ul>
            </div>
            <p className="text-2xl text-center mb-1">
              Precio: <del>${props.antes}</del>
            </p>
            <p className="text-2xl text-center mb-3">Paga: ${props.precio}</p>
            <a
              href={props.pago}
              className=" mx-auto w-full md:w-60 lg:w-80 h-11 bg-black text-yellow-400 flex justify-center items-center"
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
