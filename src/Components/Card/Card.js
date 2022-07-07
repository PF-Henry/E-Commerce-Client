import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card productCard border-0">
      <img
        src="https://c.s-microsoft.com/en-au/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=d920d548-17ab-fe35-e210-d5a1bfcfcca5"
        className="card-img-top productImage"
        alt="item"
      />
      <div className="card-body">
        <h5 className="card-title text-blue mb-3">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h1 className="text-blue mb-3">$500</h1>
        <div className="btn text-white bg-purple-dark px-5 py-1 addToCartBtn border-0">
          Add to the cart
        </div>
      </div>
    </div>
  );
};

export default Card;
