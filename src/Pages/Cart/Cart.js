import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import { removeFromCart } from "../../Redux/productSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();
  let quantities = cartItems.reduce((total, obj) => obj.quantity + total, 0);
  let subtotal = cartItems.reduce(
    (total, obj) => obj.quantity * obj.price + total,
    0
  );
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      <Navbar />
      <div className="container-md  min-vh">
        <div className="fs-1 text-start w-100 formH1 mb-3">Shopping Cart</div>
        {!cartItems.length ? (
          <div>
            <div className="text-start alert alert-warning fs-5 d-flex align-items-center gap-2">
              <FiAlertTriangle size={"1.8rem"} />
              Your Shopping Cart is empty.
            </div>
            <Link
              to="/"
              className="d-flex align-items-center text-secondary justify-content-center mt-4 text-decoration-none"
            >
              <IoIosArrowRoundBack size={"1.8rem"} />
              <div className="fs-5 text-decoration-underline-hover">
                Start Shopping
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <div className="d-flex p-3 border-bottom border-secondary text-secondary">
              <div className="col-lg-7 text-start">Product</div>
              <div className="col-lg-1 text-start">Price</div>
              <div className="col-lg-3">Qty</div>
              <div className="col-lg-1 text-end">Subtotal</div>
            </div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="d-flex border-bottom border-secondary p-3 flex-column align-items-center flex-sm-row"
              >
                <div className="col-lg-3 d-flex justify-content-start">
                  <img
                    src={
                      product.images.length
                        ? product.images[0].url_image
                        : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    }
                    alt="product img"
                    height={"120px"}
                  />
                </div>
                <div className="col-lg-4 d-flex flex-column align-items-start">
                  <div className="fw-bold">{product.name}</div>
                  <div className="d-flex justify-content-start">
                    <div
                      className="text-secondary deleteProduct  d-inline-flex align-items-center"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      <IoTrashOutline /> Delete
                    </div>
                  </div>
                </div>
                <div className="fw-bold col-lg-1 text-start">
                  ${product.price}
                </div>
                <div className="col-lg-3">{product.quantity}</div>
                <div className="fw-bold col-lg-1 text-end">
                  ${product.quantity * product.price}
                </div>
              </div>
            ))}
            <div className="p-3 text-end">
              Subtotal ({quantities} {quantities > 1 ? "items" : "item"}):{" "}
              <b>${subtotal}</b>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
