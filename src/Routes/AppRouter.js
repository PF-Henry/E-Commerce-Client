import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from '../Components/ErrorPage/ErrorPage';
import LayoutUser from '../Components/User/Dashboard/LayoutUser';
import UserFavs from '../Components/User/UserFavs';
import UserSettings from '../Components/User/UserSettings';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Cart from '../Pages/Cart/Cart';
import { ProductDetail } from '../Components/ProductDetail/ProductDetail';
// import Cart from '../Pages/Cart/Cart';


export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/user/" element={<LayoutUser />}>
              <Route  exact path="favorites" element={<UserFavs />} />
              <Route  exact path="orders" element={"Pendiente"} />
              <Route  exact path="reviews" element={"Pendiente"} />
              <Route  exact path="settings" element={<UserSettings />} />
              <Route  exact path="about" element={<AboutUs />} />
              <Route  exact path="cart" element={<Cart />} />
              <Route  path="/user/*" element={<ErrorPage />} />
            </Route>
            <Route  path="product_detail/:id" element={<ProductDetail />} />
            <Route  path="/user/*" element={<ErrorPage />} /> 
            <Route  path="*" element={<ErrorPage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    </div>
  )
}
