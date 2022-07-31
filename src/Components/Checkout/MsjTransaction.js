import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTransactionState } from "../../Redux/productSlice";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import getQueryString from "../../Functions/getQueryString";
import { MdOutlineInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Checkout.css";

const MsjTransaction = () => {
  const transactionState = useSelector(
    (state) => state.products.transactionState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTransactionState(getQueryString().status));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="feedback-container d-flex justify-content-center align-items-center bg-light">
        <div className="d-flex align-items-center justify-content-center">
          {transactionState === "approved" || transactionState === "pending" ? (
            <div>
              <div className="text-aqua">
                <MdOutlineInfo size={"6rem"} />
              </div>
              <div className="text-purple fs-3 fw-semibold">
                Thank you for your purchase!
              </div>
              <div className="text-purple fs-4 fw-light">
                You can check the status of your order in
              </div>
              <Link
                to="/app/user/orders"
                className="fs-4 text-aqua fw-semibold"
              >
                {"User > Orders"}
              </Link>
            </div>
          ) : (
            <div>
              <div className="text-aqua">
                <MdOutlineInfo size={"6rem"} />
              </div>
              <div className="text-purple fs-3 fw-semibold">
                Uh oh! Something went wrong with your payment.
              </div>
              <div className="text-purple fs-4 fw-light">Please try again.</div>
              <Link to="/auth/cart" className="fs-4 text-aqua fw-semibold">
                Back to Cart
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MsjTransaction;
