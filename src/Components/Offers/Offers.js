import React from "react";
import Card from "../Card/Card";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="bg-purple-dark py-5 mt-5">
      <h1 className="text-white mb-5 letter-spacing sectionTitle">OFFERS</h1>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="btn offersBtn py-1 border-0 mt-5 letter-spacing">More</div>
    </div>
  );
};

export default Offers;
