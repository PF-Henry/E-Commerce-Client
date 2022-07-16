import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  let quantities = cartItems.reduce((total, obj) => obj.quantity + total, 0);
  let subtotal = cartItems.reduce(
    (total, obj) => obj.quantity * obj.price + total,
    0
  );
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
              <div className="fs-5">Start Shopping</div>
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="d-flex justify-content-between border-bottom border-secondary p-3 flex-column align-items-center flex-sm-row"
              >
                <div className="basis text-start">{product.name}</div>
                <div className="basis">Quantity: {product.quantity}</div>
                <div className="basis text-end fw-bold">${product.price}</div>
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
