import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

import "../index.css";

const LayoutPublic = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default LayoutPublic;
