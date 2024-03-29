import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignIn />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/product_detail/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/feedback" element={<MsjTransaction />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
