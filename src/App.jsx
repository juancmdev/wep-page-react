import React from "react";
import "./index.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
