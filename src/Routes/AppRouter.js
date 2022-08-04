import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import LayoutUser from "../Components/User/Dashboard/LayoutUser";
import UserFavs from "../Components/User/UserFavs";
import UserSettings from "../Components/User/UserSettings";
import Checkout from "../Components/Checkout/Checkout";
import UserOrders from "../Components/User/UserOrders";
import UserOrderDetail from "../Components/Tables/UserOrderDetail";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/user/" element={<LayoutUser />}>
          <Route exact path="favorites" element={<UserFavs />} />
          <Route exact path="orders" element={<UserOrders />} />
          <Route exact path="orders/detail" element={<UserOrderDetail />} />
          <Route exact path="reviews" element={"Pendiente"} />
          <Route exact path="settings" element={<UserSettings />} />
        </Route>
        <Route path="/pay" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
