import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header w-full h-[100px] border-[1px] border-solid border-black flex items-center ">
        <h1 className="w-28 h-10 text-white bg-black flex justify-center items-center ml-2 tracking-widest">
          DXS Tienda
        </h1>
      </header>
    </>
  );
};

export default Header;
