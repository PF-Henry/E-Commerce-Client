import React from "react";
import "./Card.css";

const Card = ({ object }) => {
  return (
    <div className="card productCard border-0">
      <img
        src={
          object.images.length
            ? object.images[0].url_image
            : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
        }
        className="card-img-top productImage"
        alt="item"
      />
      <div className="card-body">
        <h5 className="card-title text-blue mb-3 letter-spacing">
          {object.name}
        </h5>
        <p className="card-text letter-spacing fw-light">
          {object.description.slice(0, 100)}
          {object.description.length > 100 && "..."}
        </p>
        <h1 className="text-blue mb-3 letter-spacing">${object.price}</h1>
        <div className="btn text-white bg-purple-dark py-1 addToCartBtn border-0 letter-spacing">
          Add to the cart
        </div>
      </div>
    </div>
  );
};

export default Card;
