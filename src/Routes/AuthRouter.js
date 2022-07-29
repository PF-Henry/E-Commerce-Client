import React from "react";
import { Routes, Route } from "react-router-dom";
// import Checkout from "../Components/Checkout/Checkout";
import MsjTransaction from "../Components/Checkout/MsjTransaction";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { Login } from "../Components/Login/Login";
import { ProductDetail } from "../Components/ProductDetail/ProductDetail";
import { SignIn } from "../Components/SignIn/SignIn";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Cart from "../Pages/Cart/Cart";

export const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/pay" element={<Checkout />} /> */}
        <Route path="/feedback" element={<MsjTransaction />} />
      </Routes>
    </div>
  );
};
