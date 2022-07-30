import React from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";
import { SiHexo } from "react-icons/si";
import mpLogo from "./images/mercado-pago-logo.png";
import "./Checkout.css";

const Checkout = () => {
  const initPoint = useSelector((state) => state.products.initPoint);
  const cartItems = useSelector((state) => state.products.cartItems);
  const totalProducts = cartItems.reduce(
    (total, obj) => obj.quantity + total,
    0
  );
  let subtotal = cartItems.reduce(
    (total, obj) => obj.quantity * obj.price + total,
    0
  );
  return (
    <div className="min-vh-100 py-4 d-flex align-items-center justify-content-center bg-purple-dark">
      <div className="border border-secondary bg-light p-5 rounded-4">
        <div className="text-aqua d-flex align-items-center justify-content-center">
          <SiHexo fontSize={"4rem"} />
        </div>
        <div className="text-purple fw-bold fs-1">Order Summary</div>
        <div className="text-secondary fs-5">
          {totalProducts} {totalProducts > 1 ? "items" : "item"}
        </div>
        <div className="mt-4">
          {cartItems.map((product, index) => (
            <div key={index} className="d-flex justify-content-between py-2">
              <img
                src={product.images[0].url_image}
                alt={product.name}
                height={"90px"}
                className="border border-secondary me-3 p-2"
              />
              <div className="text-end">
                <div className="fw-semibold text-purple overflow-auto">
                  {product.name}
                </div>
                <div>x{product.quantity}</div>
                <div>{product.quantity * product.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 mt-2 border-bottom border-top border-secondary">
          <div className="d-flex justify-content-between">
            <div>Subtotal:</div>
            <div>{subtotal}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Shipping:</div>
            <div>FREE</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Tax:</div>
            <div>0</div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between fw-bold fs-3 text-purple my-2">
            <div>Total:</div>
            <div>{subtotal}</div>
          </div>
        </div>
        {initPoint === "" ? (
          <div className="mt-3">
            <div className="spinner-border text-aqua" role="status" />
            <div className="text-purple fw-semibold">Loading...</div>
          </div>
        ) : (
          <>
            <a
              href={initPoint}
              rel="noreferrer"
              className="fs-4 fw-semibold btn btn-aqua px-5 py-2 mt-3 letter-spacing d-flex align-items-center justify-content-center gap-1"
            >
              <MdOutlinePayment size={"1.8rem"} />
              Pay
            </a>
            <div className="text-secondary fw-semibold fs-6 fst-italic mt-2 d-flex align-items-center gap-1 justify-content-center">
              Powered by{" "}
              <img src={mpLogo} alt="mercado pago logo" height={"20rem"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
