import Carousel from "../components/Carousel";
import { productos } from "../database/productos";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="text-3xl font-bold text-center mt-3">
        <h1 className="mt-3 mb-4">Bienvenido a nuestra tienda</h1>

        <Carousel />
      </div>
    </>
  );
};

export default Home;
