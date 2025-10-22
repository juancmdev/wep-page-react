import { useEffect, useState } from "react";
import { productos } from "../database/productos";

const MainCard = () => {
  const [productosListados, setProductosListados] = useState([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setProductosListados(productos);
  }, []);

  //   const handleAddToCart = () => {
  //     // Lógica para añadir al carrito
  //     setInCart(true);
  //     console.log(`Producto "${productos.nombre}" añadido al carrito!`);

  //     // Simular un mensaje de confirmación (en lugar de alert)
  //     setTimeout(() => setInCart(false), 2000);
  //   };

  return (
    <>
      <div></div>
    </>
  );
};

export default MainCard;

{
  /* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-14 gap-5">
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <Link to={producto.to} className="">
              <h2 className="h-10 text-xl mb-6 text-center">
                {producto.nombre}
              </h2>
              <img
                src={producto.img}
                className="mb-3 transition-all ease delay-75 hover:scale-105 cursor-pointer w-[300px] h-[300px]"
              />
            </Link>
            <h3>
              Precio: $
              <del className="line-through decoration-solid">
                {producto.antes}{" "}
              </del>
              {" - "}
              <span className="text-lg cursor-pointer">
                Promo: ${producto.precio}
              </span>
            </h3>
          </li>
        ))}
      </ul> */
}
