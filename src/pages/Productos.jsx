import React from "react";

const Productos = () => {
  return (
    <>
      <div className="container">
        <div className="text-3xl font-bold">
          <h1 className="text-center my-3">Tienda</h1>
        </div>
        <div className="grid grid-cols-3">
          <ul id="lista-*******"></ul>
          <a href="/">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
        </div>
      </div>

      <div id="template-productos">
        <li class="lista">
          <div class="card">
            <div class="front">
              <h2></h2>
              <img src="" alt="" />
            </div>

            <div class="back">
              <h2></h2>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default Productos;
