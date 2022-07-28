import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PrivateRoutes = ({ children }) => {
    const role = useSelector((state) => state.products.role);

    return role === 'User' ? <Navigate to='app/user' /> : children

}
