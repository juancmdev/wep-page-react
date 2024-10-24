import React from "react";
import Template from "../components/Template";


const Productos = () => {
  
  return (
    <>
      <div className="">
        <div className="text-3xl font-bold">
          <h1 className="text-center my-3">Tienda</h1>
        </div>
        <div className="grid grid-cols-3">
          <ul id="lista-categorias"></ul>
          
        </div>
      </div>

      <Template />
    </>
  );
};

export default Productos;
