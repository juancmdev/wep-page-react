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
        <input
          type="text"
          className="w-64 h-10 border-[1px] border-solid  hover:border-yellow-400 cursor-pointer"
          placeholder="Buscar"
        />
      </header>
    </>
  );
};

export default Header;
