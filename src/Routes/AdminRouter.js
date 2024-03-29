import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminBrands from "../Components/Admin/AdminBrands";
import AdminCategories from "../Components/Admin/AdminCategories";
import AdminOrders from "../Components/Admin/AdminOrders";
import AdminProducts from "../Components/Admin/AdminProducts";
import AdminSettings from "../Components/Admin/AdminSettings";
import AdminUsers from "../Components/Admin/AdminUsers";
import Layout from "../Components/Admin/Dashboard/Layout";
import { CreateProduct } from "../Components/Product/CreateProduct";
import { UpdateProduct } from "../Components/Product/UpdateProduct";
import UpdateCategory from "../Components/Updates/UpdateCategory/UpdateCategory";
import UpdateBrand from "../Components/Updates/UpdateBrand/UpdateBrand";
import { OrderView } from "../Components/Admin/OrderView/OrderView";

export const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/" element={<Layout />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/update/:id" element={<UpdateProduct />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="categories/update/:id" element={<UpdateCategory />} />
          <Route path="brands" element={<AdminBrands />} />
          <Route path="brands/update/:id" element={<UpdateBrand />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/:orderId" element={<OrderView />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </div>
  );
};
