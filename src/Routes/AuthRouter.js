import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from '../Components/Login/Login';
import { ProductDetail } from '../Components/ProductDetail/ProductDetail';
import { SignIn } from '../Components/SignIn/SignIn';
import AboutUs from '../Pages/AboutUs/AboutUs';




export const AuthRouter = () => {


    
  return (
    <div>
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<SignIn />} />
            <Route path="/auth/about" element={<AboutUs />} />
            <Route path="/auth/product_detail/:id" element={<ProductDetail />} />
        </Routes>
    </div>
  )
}
