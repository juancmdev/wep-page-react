import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header w-full h-[100px] border-[1px] border-solid border-black flex items-center justify-evenly">
        <h1 className="text-xl w-36 h-16 text-white bg-black flex justify-center items-center ml-2 tracking-[2px]">
          D<span className="text-yellow-400">X</span>S Ti
          <span className="text-yellow-400">en</span>da
        </h1>

        <div className="input relative">
          <input
            type="text"
            className="p-2 w-64 h-10 border-[1px] border-solid  hover:border-yellow-400 cursor-pointer outline-none transition ease-in-out delay-75"
            placeholder="Buscar"
          ></input>
          <i class="fa-solid fa-magnifying-glass absolute top-3 right-3"></i>
        </div>
        <div className="w-10 h-10 bg-black text-yellow-400 flex justify-center items-center rounded-full transition ease-in-out delay-75 hover:text-white cursor-pointer">
          <i class="fa-regular fa-user"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
