import React from "react";
import Card from "../../components/Card/Card";

const Pelotas_tenis_head = () => {
  return (
    <>
      <Card />
      <p className="mx-4">
        Descripción: Las pelotas de tenis Head son ideales para cualquier otra
        persona que busque la pelota perfecta para lanzar sus mejores más
        precisos tiros.
      </p>
      <ul className="list-disc mx-4 mb-4">
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
