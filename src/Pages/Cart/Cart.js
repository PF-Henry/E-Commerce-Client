import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FiAlertTriangle } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  return (
    <div>
      <Navbar />
      <div className="container-md  min-vh">
        <div className="fs-1 text-start w-100 formH1 mb-3">Shopping Cart</div>
        {!cartItems.length && (
          <div className="text-start alert alert-warning fs-5 d-flex align-items-center gap-2">
            <FiAlertTriangle size={"1.8rem"} />
            Your Shopping Cart is empty.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
