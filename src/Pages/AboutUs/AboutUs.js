import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { VscAccount } from "react-icons/vsc";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container-md min-vh">
        <div className="fs-1 text-start formH1 mb-3">Our Team</div>
        <div className="d-flex flex-wrap gap-5 pb-5 justify-content-center align-items-center">
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Gerardo Graziano</div>
          </div>
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Gustavo Leyria</div>
          </div>
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Ricardo Vargas</div>
          </div>
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Sneider Gallegos</div>
          </div>
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Victor Arias</div>
          </div>
          <div>
            <VscAccount size={"10rem"} />
            <div className="fw-bold mt-1">Yohanaly Palma</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
