import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ products }) => {
  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 cards-container">
      {products.map((product) => (
        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
