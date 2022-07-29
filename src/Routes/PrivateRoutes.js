import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SiNodedotjs } from 'react-icons/si';


export const PrivateRoutes = ({ children }) => {
    const role = useSelector((state) => state.products.role);

    return role !== 'User' && role !== 'Admin' ? <Navigate to='/auth/login' /> : children

}
