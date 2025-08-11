import { useState, useEffect } from "react";
import { productos } from "../database/productos";

// Este es un componente de carrusel de imágenes hecho con React y Tailwind CSS.
// Es completamente responsivo y tiene navegación, indicadores y reproducción automática.

const Carousel = () => {
  // Array de URLs de imágenes de ejemplo.
  // Puedes reemplazarlas con tus propias imágenes.
  const images = [
    "public/images/zippo_28332.png",
    "public/images/bolas_tenis_head.png",
    "public/images/Gemini_Generated_Image_gfzw6igfzw6igfzw.jpg",
    "public/images/zippo_28621.png",
  ];

  // Estado para rastrear el índice de la imagen actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  // Función para ir a una imagen específica
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // useEffect para la reproducción automática del carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [currentSlide]);

  return (
    <div className="m-auto min-h-screen bg-gray-100 p-4">
      <div className="relative w-[600px] max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden group">
        {/* Contenedor principal del carrusel */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1200x600/cccccc/333333?text=Imagen+no+disponible";
                }}
              />
            </div>
          ))}
        </div>

        {/* Botones de navegación (anterior y siguiente) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 text-gray-800 p-3 rounded-full hover:bg-white/80 focus:outline-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          {/* Icono de flecha izquierda usando SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 text-gray-800 p-3 rounded-full hover:bg-white/80 focus:outline-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          {/* Icono de flecha derecha usando SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicadores de diapositivas (puntos) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
