import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

import "../index.css";

const LayoutPublic = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default LayoutPublic;
