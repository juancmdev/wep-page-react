import React from "react";
import "./index.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

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
