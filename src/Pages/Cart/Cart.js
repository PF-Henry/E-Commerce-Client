import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FiAlertTriangle, FiMinus, FiPlus } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { SiHexo } from "react-icons/si";
import { MdOutlineRemoveShoppingCart, MdOutlinePayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Cart.css";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  cleanCart,
} from "../../Redux/productSlice";

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
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
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
            <div className="d-flex justify-content-start">
              <Link
                to="/"
                className="align-items-center text-secondary justify-content-start mt-4 mb-3 text-decoration-none d-inline-flex"
              >
                <IoIosArrowRoundBack size={"1.8rem"} />
                <div className="fs-5 text-decoration-underline-hover">
                  Continue Shopping
                </div>
              </Link>
            </div>
            <div className="d-flex p-3 border-bottom border-secondary text-secondary letter-spacing">
              <div className="col-lg-7 text-start">Product</div>
              <div className="col-lg-1 text-start">Price</div>
              <div className="col-lg-3">Qty</div>
              <div className="col-lg-1 text-end">Subtotal</div>
            </div>
            {cartItems.map((product, index) => (
              <div
                key={product.id}
                className="d-flex border-bottom border-secondary p-3 flex-column align-items-center flex-sm-row"
              >
                <div className="col-lg-2 d-flex justify-content-center pe-3">
                  <img
                    src={
                      product.images.length
                        ? product.images[0].url_image
                        : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    }
                    alt="product img"
                    height={"80px"}
                  />
                </div>
                <div className="col-lg-5 d-flex flex-column align-items-start">
                  <NavLink
                    to={`/product_detail/${product.id}`}
                    className="text-decoration-none text-reset"
                  >
                    <div className="fw-bold aqua-hover text-decoration-underline-hover">
                      {product.name}
                    </div>
                  </NavLink>
                  <div className="d-flex justify-content-start">
                    <div
                      className="text-secondary deleteProduct d-inline-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target={`#deleteModal${index}`}
                    >
                      <IoTrashOutline /> Delete
                    </div>
                  </div>
                </div>
                <div className="fw-bold col-lg-1 text-start">
                  ${product.price}
                </div>
                <div className="col-lg-3 d-flex align-items-center justify-content-center">
                  <div
                    className="btn border aqua-hover d-flex align-items-center"
                    onClick={() => {
                      product.quantity > 1 && handleDecreaseCart(product);
                    }}
                    data-bs-toggle={product.quantity === 1 && "modal"}
                    data-bs-target={
                      product.quantity === 1 && `#deleteModal${index}`
                    }
                  >
                    <FiMinus />
                  </div>
                  <div className="px-3 d-flex justify-content-center">
                    {product.quantity}
                  </div>
                  <div
                    className="btn border aqua-hover d-flex align-items-center"
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    <FiPlus />
                  </div>
                </div>
                <div className="fw-bold col-lg-1 text-end">
                  ${product.quantity * product.price}
                </div>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id={`deleteModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="deleteModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content border-0">
                      <div className="modal-header bg-purple-dark text-white">
                        <div className="text-white d-flex align-items-center letter-spacing">
                          <SiHexo fontSize={"2.3rem"} />
                          <div className="d-flex pb-1">
                            <div className="fs-4">exa</div>
                            <div className="fw-bold text-aqua fs-4">tech</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body fw-bold py-4">
                        Are you sure you want to delete {product.name}?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger d-flex align-items-center"
                          onClick={() => handleRemoveFromCart(product)}
                          data-bs-dismiss="modal"
                        >
                          <IoTrashOutline /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center pb-5">
              <div
                className="btn btn-danger px-5 letter-spacing gap-1 d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#cleanCartModal"
              >
                <MdOutlineRemoveShoppingCart size={"1.3rem"} /> Remove All
              </div>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="cleanCartModal"
                tabIndex="-1"
                aria-labelledby="cleanCartModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-sm">
                  <div className="modal-content border-0">
                    <div className="modal-header bg-purple-dark text-white">
                      <div className="text-white d-flex align-items-center letter-spacing">
                        <SiHexo fontSize={"2.3rem"} />
                        <div className="d-flex pb-1">
                          <div className="fs-4">exa</div>
                          <div className="fw-bold text-aqua fs-4">tech</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body fw-bold py-4">
                      Are you sure you want to remove all items from your cart?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger d-flex align-items-center"
                        onClick={() => {
                          dispatch(cleanCart());
                        }}
                        data-bs-dismiss="modal"
                      >
                        <MdOutlineRemoveShoppingCart size={"1.3rem"} /> Remove
                        All
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column">
                <div className="p-3 text-end pb-0">
                  Subtotal ({quantities} {quantities > 1 ? "items" : "item"}):{" "}
                  <b className="ms-2">${subtotal}</b>
                </div>
                <div className="text-end pe-3 text-secondary">
                  Taxes and shipping calculated at checkout
                </div>
                <div className="d-flex justify-content-end pe-3">
                  <div className="btn btn-aqua px-5 mt-1 letter-spacing d-flex align-items-center gap-1">
                    <MdOutlinePayment size={"1.3rem"} />
                    Proceed to checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
