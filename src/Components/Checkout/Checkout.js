import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const initPoint = useSelector((state) => state.products.initPoint);
  return (
    <div>
      {initPoint === "" ? (
        <div>Loading</div>
      ) : (
        <div>
          <a href={initPoint} rel="noreferrer">
            Pay
          </a>
        </div>
      )}
    </div>
  );
};

export default Checkout;
