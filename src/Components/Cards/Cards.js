import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { GoSearch } from "react-icons/go";
import "./Cards.css";

const Cards = ({ products }) => {
  const filterOne = useSelector((state) => state.products.filter);
  const filterTwo = useSelector((state) => state.products.brandsFilter);

  if (!filterOne.length && !filterTwo.length && !products.length) {
    return (
      <div className="cards-container d-flex justify-content-center align-items-center">
        <div>
          <div className="spinner-border text-aqua" role="status" />
          <div className="text-purple fw-semibold">Loading...</div>
        </div>
      </div>
    );
  } else if (!products.length) {
    return (
      <div className="cards-container d-flex justify-content-center align-items-center">
        <div>
          <div>
            <GoSearch size={"4rem"} />
          </div>
          <div className="fw-semibold fs-3">No results found</div>
          <div className="text-secondary">
            We couldn't find what you were looking for
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 cards-container mb-5">
      {products.map((product) => (
        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
