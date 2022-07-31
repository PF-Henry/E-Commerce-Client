import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addFavoriteAsync,
  removeFavoriteAsync,
} from "../../Redux/productSlice";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import pesos from "../../Functions/currency";
import "./Card.css";

const Card = ({ object }) => {
  const favoriteState = useSelector((state) => state.products.favorites);
  const cartItems = useSelector((state) => state.products.cartItems);
  const role = useSelector((state) => state.products.role);
  let productCartIndex = cartItems.findIndex((item) => item.id === object.id);
  const dispatch = useDispatch();

  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart({ item, quantity }));
  };

  let [heartSelected, setHeartSelected] = useState(
    favoriteState.find((p) => p.id === object.id)
  );

  const onFavoriteClick = (userId, productId) => {
    let heartSelectedThree = favoriteState.find((p) => p.id === productId);

    if (heartSelectedThree) {
      dispatch(removeFavoriteAsync({ userId, productId }));
      setHeartSelected((heartSelected = false));
    } else {
      dispatch(addFavoriteAsync({ userId, productId }));
      setHeartSelected((heartSelected = true));
    }
  };

  return (
    <div className="card productCard border-0 animate__animated animate__fadeIn">
      {role === "Guest" ? null : role === "User" && heartSelected ? (
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
        {role === "User" ? (
          (
            <NavLink
              to={`/app/product_detail/${object.id}`}
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
          ) || role === "Guest"
        ) : (
          <NavLink
            to={`/auth/product_detail/${object.id}`}
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
        )}

        <div className="mt-auto">
          <h1 className="text-blue mb-3 letter-spacing">
            ${pesos.format(object.price)}
          </h1>
          {productCartIndex !== -1 &&
          object.stock === cartItems[productCartIndex].quantity ? (
            <div className="btn disabled btn-danger py-1 addToCartBtn border-0 letter-spacing">
              Out of Stock
            </div>
          ) : (
            <div
              className="btn text-white bg-purple-dark py-1 addToCartBtn border-0 letter-spacing"
              onClick={() => {
                handleAddToCart(object, 1);
              }}
            >
              Add to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
