import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  addToCart,
  getDetailProductAsync,
  cleanDetail,
} from "../../Redux/productSlice";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const product = useSelector((state) => state.products.detailsOfProduct);
  const cartItems = useSelector((state) => state.products.cartItems);
  let productCartIndex = cartItems.findIndex((item) => item.id === product.id);
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
      : product.images[0].url_image;
    productDetails.img2 = !product.images.length
      ? "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
      : product.images.length > 1
      ? product.images[1].url_image
      : product.images[0].url_image;
    productDetails.img3 = !product.images.length
      ? "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
      : product.images.length > 2
      ? product.images[2].url_image
      : product.images[0].url_image;

    productDetails.brandName = product.brand.name;
    productDetails.price = product.price;
    productDetails.stock = product.stock;
    productDetails.technical_especification = product.technical_especification;
    productDetails.description = product.description;
    productDetails.categories = !product.categories.length
      ? "Without categories"
      : product.categories[0].name;
  }

  let [mainImage, setMainImage] = useState(productDetails.img1);

  const dispatch = useDispatch();
  const { id } = useParams();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailProductAsync(id));
    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  const onChangeImage = (url) => {
    setMainImage((mainImage = url));
    console.log(url);
    console.log(mainImage);
  };

  return (
    <div>
      <Navbar />
      <div className="div-container">
        <div className="div-container-header">
          <NavLink
            to="/"
            className="div-container-header--btn animate__animated animate__fadeInLeft"
          >
            Back
          </NavLink>
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
                className="img-fluid"
              />
            ) : (
              <img
                src={mainImage}
                alt={productDetails.name}
                className="img-fluid"
              />
            )}
          </div>

          <div className="div-container-sectionOne-Three animate__animated animate__fadeInRight">
            <div className="div-info-product">
              <h2 className="div-info-product-title">Price:</h2>
              <h3 className="div-info-product-description--price">
                {" "}
                $ {productDetails.price}
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
                  {productDetails.stock}
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

            <div className="div-info-btn">
              {/* <select className="form-select select-quantity">
                <option>Select Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select> */}
              {productCartIndex !== -1 &&
              product.stock === cartItems[productCartIndex].quantity ? (
                <button className="btn btnDetail-Add-Product btn-danger disabled">
                  {" "}
                  Out of Stock
                </button>
              ) : (
                <button
                  className="btnDetail-Add-Product"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  {" "}
                  Add to the cart
                </button>
              )}
            </div>
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
            <h3 className="div-info-technical-decription--title">Reviews</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
