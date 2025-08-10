import { productos } from "../database/productos";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="text-3xl font-bold text-center mt-3">
        <h1>Bienvenido a nuestra tienda</h1>
        <img
          src={productos[0].img}
          alt=""
          className="mt-3 mx-auto w-[450px] h-[450px]"
        />
      </div>
    </>
  );
};

export default Home;
