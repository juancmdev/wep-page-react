import { useEffect, useState } from "react";
import { productos } from "../database/productos";

const MainCard = () => {
  const [productosListados, setProductosListados] = useState([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setProductosListados(productos);
  }, []);

  return (
    <>
      <ul className="grid grid-cols-4 gap-5">
        {productosListados.map((producto) => (
          <li key={producto.id}>
            <div className="w-[300px] h-[450px] rounded shadow-slate-400 shadow-md mb-3">
              <div className="w-[300px] h-[220px]">
                <img
                  src={producto.img}
                  className="object-contain w-full h-full pt-3 pl-3 pr-3 rounded"
                />
              </div>
              <div className="w-[300px] h-[60px] ">
                <h1 className="text-center text-xl px-2 font-bold">
                  {producto.nombre}
                </h1>
              </div>
              <div className="w-[300px] h-[50px]">
                <p className="text-sm px-3 text-left ">
                  {producto.descripcion1}
                </p>
              </div>
              <div>
                <hr className="mx-3" />
                <div className="flex items-center">
                  <h2 className="mx-4 font-extrabold text-3xl mt-2">
                    ${producto.precio}
                  </h2>
                  <h5 className="line-through mt-2 text-xl text-gray-600">
                    ${producto.antes}
                  </h5>
                </div>
                <button className="text-xl h-30 w-64 bg-black text-yellow-500 hover:text-yellow-600  p-2 mt-2 mx-auto block rounded-xl">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
