import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addFavoriteAsync } from "../../Redux/productSlice";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import "./Card.css";

const Card = ({ object }) => {
  const cartItems = useSelector((state) => state.products.cartItems);
  let productCartIndex = cartItems.findIndex((item) => item.id === object.id);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  let [heartSelected, setHeartSelected] = useState(false);

  const onFavoriteClick = (userId, productId) => {
    // console.log(item);
    if (heartSelected) {
      setHeartSelected((heartSelected = false));
    } else {
      dispatch(addFavoriteAsync({ userId, productId }));
      setHeartSelected((heartSelected = true));
    }
  };

  return (
    <div className="card productCard border-0 animate__animated animate__fadeIn">
      {heartSelected ? (
        <button
          className="card-btn-favorite favorite"
          onClick={() => onFavoriteClick(1, object.id)}
        >
          {" "}
          <MdOutlineFavorite />{" "}
        </button>
      ) : (
        <button
          className="card-btn-favorite nonFavorite"
          onClick={() => onFavoriteClick(1, object.id)}
        >
          {" "}
          <MdOutlineFavoriteBorder />{" "}
        </button>
      )}
      <img
        src={
          object.images.length
            ? object.images[0].url_image
            : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
        }
        className="card-img-top productImage"
        alt="item"
      />
      <div className="card-body d-flex flex-column">
        <NavLink
          to={`/product_detail/${object.id}`}
          className="text-decoration-none text-reset"
        >
          <div className="mb-3">
            <h5 className="card-title text-blue mb-3 letter-spacing">
              {object.name}
            </h5>
            <p className="card-text letter-spacing fw-light">
              {object.description.slice(0, 100)}
              {object.description.length > 100 && "..."}
            </p>
          </div>
        </NavLink>
        <div className="mt-auto">
          <h1 className="text-blue mb-3 letter-spacing">${object.price}</h1>
          {productCartIndex !== -1 &&
          object.stock === cartItems[productCartIndex].quantity ? (
            <div className="btn disabled btn-danger py-1 addToCartBtn border-0 letter-spacing">
              Out of Stock
            </div>
          ) : (
            <div
              className="btn text-white bg-purple-dark py-1 addToCartBtn border-0 letter-spacing"
              onClick={() => {
                handleAddToCart(object);
              }}
            >
              Add to the cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
