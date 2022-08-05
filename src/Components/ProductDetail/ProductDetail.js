import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToCart,
  getDetailProductAsync,
  cleanDetail,
} from "../../Redux/productSlice";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ProductDetail.css";
import optionsArray from "../../Functions/optionsArray";
import { Spinner } from "../Spinner/Spinner";
import pesos from "../../Functions/currency";
import { HiStar } from "react-icons/hi";

export const ProductDetail = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.detailsOfProduct);
  const cartItems = useSelector((state) => state.products.cartItems);
  const role = useSelector((state) => state.products.role);
  const productCartIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  let [spinner, setSpinner] = useState(true);

  const switchSpinner = () => {
    setTimeout(() => {
      setSpinner((spinner = false));
    }, 1500);
  };

  switchSpinner();

  const options = optionsArray(
    productCartIndex,
    product.stock,
    productCartIndex !== -1 && cartItems[productCartIndex].quantity
  );

  const productDetails = {
    name: "",
    img1: "",
    img2: "",
    img3: "",
    brandName: "",
    price: 0,
    stock: 0,
    description: "",
    technical_especification: "",
    categories: "",
  };

  if (Object.values(product).length) {
    productDetails.name = product.name;
    productDetails.img1 = !product.images.length
      ? "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
      : product.images[0].src;
    productDetails.img2 = !product.images.length
      ? "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
      : product.images.length > 1
      ? product.images[1].src
      : product.images[0].src;
    productDetails.img3 = !product.images.length
      ? "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
      : product.images.length > 2
      ? product.images[2].src
      : product.images[0].src;
    productDetails.brandName = product.brand.name;
    productDetails.price = product.price;
    productDetails.stock = product.stock;
    productDetails.technical_especification = product.technical_especification;
    productDetails.description = product.description;
    productDetails.categories = !product.categories.length
      ? "Without categories"
      : product.categories[0].name;
    productDetails.reviews = product.reviews;
  }

  let [mainImage, setMainImage] = useState(productDetails.img1);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart({ item, quantity }));
    setQuantity(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailProductAsync(id));
    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  // useEffect(() => {

  // }, [mainImage])

  const onChangeImage = (url) => {
    setMainImage((mainImage = url));
  };

  return (
    <div>
      <Navbar />

      {spinner ? (
        <div className="div-spinner">
          <Spinner />
        </div>
      ) : (
        <div className="div-container">
          <div className="div-space"></div>
          <div className="div-container-header">
            <button
              onClick={() => navigate(-1)}
              className="div-container-header--btn animate__animated animate__fadeInLeft"
            >
              Back
            </button>

            <h1 className="titleDetail animate__animated animate__fadeInRight">
              {productDetails.name}
            </h1>
          </div>

          <div className="div-container-sectionOne">
            <div className="div-container-sectionOne-One animate__animated animate__fadeInLeft">
              <div className="div-container-sectionOne-One-Picture--One">
                <img
                  src={productDetails.img1}
                  alt={productDetails.name}
                  className="img-fluid leftImage"
                  onClick={() => onChangeImage(productDetails.img1)}
                />
              </div>

              <div className="div-container-sectionOne-One-Picture--Two">
                <img
                  src={productDetails.img2}
                  alt={productDetails.name}
                  className="img-fluid leftImage"
                  onClick={() => onChangeImage(productDetails.img2)}
                />
              </div>

              <div className="div-container-sectionOne-One-Picture--Three">
                <img
                  src={productDetails.img3}
                  alt={productDetails.name}
                  className="img-fluid leftImage"
                  onClick={() => onChangeImage(productDetails.img3)}
                />
              </div>
            </div>

            <div className="div-container-sectionOne-Two animate__animated animate__fadeIn">
              {mainImage.length === 0 ? (
                <img
                  src={productDetails.img1}
                  alt={productDetails.name}
                  className="img-fluid animate__animated animate__fadeIn"
                />
              ) : (
                <img
                  src={mainImage}
                  alt={productDetails.name}
                  className="img-fluid animate__animated animate__fadeIn"
                />
              )}
            </div>

            <div className="div-container-sectionOne-Three animate__animated animate__fadeInRight">
              <div className="div-info-product">
                <h2 className="div-info-product-title">Price:</h2>
                <h3 className="div-info-product-description--price">
                  {" "}
                  ${pesos.format(productDetails.price)}
                </h3>
              </div>

              <div className="div-info-product">
                <div className="div-info-section">
                  <h2 className="div-info-product-title">Brand:</h2>
                  <h3 className="div-info-product-description">
                    {" "}
                    {productDetails.brandName}
                  </h3>
                </div>

                <div className="div-info-section">
                  <h2 className="div-info-product-title">Stock:</h2>
                  <h3 className="div-info-product-description">
                    {" "}
                    {productCartIndex === -1
                      ? productDetails.stock
                      : product.stock - cartItems[productCartIndex].quantity}
                  </h3>
                </div>
              </div>

              <div className="div-info-product">
                <h2 className="div-info-product-title">Categories:</h2>
                <h3 className="div-info-product-description">
                  {" "}
                  {productDetails.categories}
                </h3>
              </div>

              {role !== "Admin" && (
                <div className="div-info-btn">
                  {productCartIndex !== -1 &&
                  product.stock === cartItems[productCartIndex].quantity ? (
                    <button className="btnDetail-Add-Product btn btn-danger disabled px-5">
                      {" "}
                      Out of Stock
                    </button>
                  ) : (
                    <div className="input-group px-3">
                      <select
                        className="form-select"
                        onChange={(e) => handleChangeQuantity(e)}
                        value={quantity}
                      >
                        {options.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <button
                        className="btnDetail-Add-Product px-4"
                        onClick={() => {
                          handleAddToCart(product, quantity);
                        }}
                      >
                        {" "}
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="div-container-sectionTwo animate__animated animate__fadeInUp">
            <div className="div-info-technical-decription">
              <h3 className="div-info-technical-decription--title">
                Description
              </h3>
              <p className="div-info-technical-decription--p">
                {" "}
                {productDetails.description}
              </p>
            </div>

            <div className="divSepareted"></div>

            <div className="div-info-technical-decription">
              <h3 className="div-info-technical-decription--title">
                Technical Description
              </h3>
              <p className="div-info-technical-decription--p">
                {" "}
                {productDetails.technical_especification}
              </p>
            </div>

            <div className="divSepareted"></div>

            <div className="div-info-technical-decription">
              <h3 className="div-info-technical-decription--title">Reviews</h3>{" "}
              {productDetails.reviews.length === 0 ? (
                <p className="div-info-technical-decription--p">
                  {" "}
                  There are no reviews for this product
                </p>
              ) : (
                productDetails.reviews.map((review) => (
                  <div
                    className="div-info-technical-decription--review border-bottom mb-4"
                    key={review.id}
                  >
                    <div className="div-info-technical-decription--review-description d-flex">
                      {" "}
                      {/* // mostrar rating con estrellas  */}
                      {review.rating === 1 ? (
                        <div className="pt-5 pb-5">
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                        </div>
                      ) : review.rating === 2 ? (
                        <div>
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                        </div>
                      ) : review.rating === 3 ? (
                        <div>
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                        </div>
                      ) : review.rating === 4 ? (
                        <div>
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gray" size={"1.5rem"} />
                        </div>
                      ) : review.rating === 5 ? (
                        <div>
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                          <HiStar color="gold" size={"1.5rem"} />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <p className="div-info-technical-decription--review-title">
                      {" "}
                      {review.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
