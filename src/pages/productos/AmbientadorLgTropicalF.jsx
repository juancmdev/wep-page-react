import { productos } from "../../database/productos";
import Card from "../../components/Card/Card";

const AmbientadorLgTropicalF = () => {
  return (
       <>
      <Card
        src={productos[3].img}
        nombre={productos[3].nombre}
        antes={productos[3].antes}
        precio={productos[3].precio}
        caracteristicas={productos[3].caracteristicas}
        pago={productos[3].pago}
      />
      <p className="mx-auto w-[90%]">
        Funciona con un derivado del petróleo - Presiona su rueda, ésta golpea
        una piedra y enciende la mecha - El encendedor se apaga automáticamente
        cuando lo tapas al cerrarlo - Es importante utilizar el combustible de
        la marca Zippo porque está hecho pensado para este tipo de mecheros
      </p>
      <br />
      <ul className=" w-[90%] list-disc mx-8 lg:mx-20 md:mx-12 mb-4">
        <li>Modelo: 28621</li>
        <li>Material: Metal</li>
        <li>Color: Silver</li>
        <li>Encendido: Acciona el encendedor girando la rueda</li>
        <li>Apagado: Se apaga de forma automática al cerrar la tapa</li>
        <li>
          Recomendación: Utilizar combustible de marca Zippo (No includido)
        </li>
        <li>Made in USA</li>
      </ul>
    </>
  )
}

export default AmbientadorLgTropicalF
