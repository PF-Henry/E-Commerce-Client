import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import { useSelector, useDispatch } from "react-redux";
import "./AdminDashboard.css";
import ProductsTable from "../ProductsTable/ProductsTable";
import { FaRegSmileBeam } from "react-icons/fa";
import {
  getAllDBProductsAsync,
  getCategoriesAsync,
} from "../../Redux/productSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const allDBProducts = useSelector((state) => state.products.allDBProducts);
  const allCategories = useSelector((state) => state.products.categoriesLoaded);
  useEffect(() => {
    if (!allDBProducts.length) {
      dispatch(getAllDBProductsAsync());
    }
  }, [allDBProducts, dispatch]);

  useEffect(() => {
    if (!allCategories.length) {
      dispatch(getCategoriesAsync());
    }
  }, [allCategories, dispatch]);
  return (
    <div className="animate__animated animate__fadeIn">
      <AdminNavBar />
      <div className="d-flex justify-content-center mb-2">
        <h2 className="admin_H2 letter-spacing d-flex align-items-center gap-2">
          Hello, Admin
          <FaRegSmileBeam size={"2.2rem"} />
        </h2>
      </div>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <NavLink
          className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
          to="/CreateProduct"
        >
          Create a Product
        </NavLink>
        {/* <NavLink
          className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
          to="/"
        >
          Create a Category
        </NavLink> */}
      </div>
      <div className="d-flex justify-content-evenly flex-wrap">
        <ProductsTable
          products={allDBProducts}
          name={"Products"}
          ruta={"/UpdateProduct/"}
        />
        {/* <ProductsTable products={allCategories} name={"Categories"} /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
