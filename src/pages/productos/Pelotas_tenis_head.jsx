import React from "react";
import Card from "../../components/Card/Card";
import { productos } from "../../database/productos";

const Pelotas_tenis_head = () => {
  return (
    <>
      <Card
        src={productos[0].img}
        nombre={productos[0].nombre}
        antes={productos[0].antes}
        precio={productos[0].precio}
        caracteristicas={productos[0].caracteristicas}
        pago={productos[0].pago}
      />
      <p className="mx-auto w-[90%]">
        Descripción: Las pelotas de tenis Head son ideales para cualquier otra
        persona que busque la pelota perfecta para lanzar sus mejores más
        precisos tiros.
      </p>
      <br />
      <ul className=" w-[90%] list-disc mx-8 lg:mx-20 md:mx-12 mb-4">
        <li>Marca: HEAD</li>
        <li>Material: Compuesto</li>
        <li>Color: Lemon Tree</li>
        <li>Rango de edad: Adulto</li>
        <li>Toque maximizado</li>
        <li>Control optimizado</li>
        <li>Longevidad extendida</li>
        <li>
          Recomendado para temperaturas altas y canchas rápidas de arcilla o
          pistas duras.
        </li>
      </ul>
    </>
  );
};

export default Pelotas_tenis_head;
