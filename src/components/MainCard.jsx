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
      <div className="w-[300px] h-[450px] bg-yellow-200 rounded shadow-slate-400 shadow-md">
        <div className="w-[300px] h-[220px] mb-2">
          <img
            src={productosListados[0].img}
            className="object-fit w-full h-full pt-3 pl-3 pr-3 rounded"
          />
        </div>
        <div>
          <h1 className="text-center text-xl px-2 font-bold">
            {productosListados[0].nombre}
          </h1>
          <p className="text-sm px-3 text-left mb-2">
            {productosListados[0].descripcion1}
          </p>
          <hr className="mx-3" />
          <div className="flex items-center">
            <h2 className="mx-4 mt-2 font-extrabold text-3xl">
              ${productosListados[0].precio}
            </h2>
            <h5 className="line-through mt-2 text-xl text-gray-600">
              ${productosListados[0].antes}
            </h5>
          </div>
          <button className="text-xl h-30 w-64 bg-black text-yellow-500 hover:text-yellow-600  p-2 mt-2 mx-auto block rounded-xl">
            Comprar Ahora
          </button>
        </div>
      </div>
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
