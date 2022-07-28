import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AdminRoutes = ({ children }) => {
  const role = useSelector((state) => state.products.role);
  return role === 'User' || role === 'Guest' ? <Navigate to='/' /> : children
}
