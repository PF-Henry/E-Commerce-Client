import React from 'react';
import { Routes, Route } from "react-router-dom";
import LayoutUser from '../Components/User/Dashboard/LayoutUser';
import UserFavs from '../Components/User/UserFavs';
import UserSettings from '../Components/User/UserSettings';
import Cart from '../Pages/Cart/Cart';




export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/user/" element={<LayoutUser />}>
              <Route path="favorites" element={<UserFavs />} />
              <Route path="orders" element={"Pendiente"} />
              <Route path="reviews" element={"Pendiente"} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}
