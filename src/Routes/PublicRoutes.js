import React from 'react';
import { SiNodedotjs } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PublicRoutes = ({ children }) => {
    const role = useSelector((state) => state.products.role);
    return role === 'User' ? <Navigate to='/app/user' /> : children
}


