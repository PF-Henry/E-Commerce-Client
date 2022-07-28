import React from 'react';
import { Routes, Route } from "react-router-dom";
import LayoutUser from '../Components/User/Dashboard/LayoutUser';




export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/app/user" element={<LayoutUser />} />
        </Routes>
    </div>
  )
}
