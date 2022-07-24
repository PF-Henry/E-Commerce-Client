import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getAllDBProductsAsync } from "../../Redux/productSlice";
import "./AdminDashboard.css";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const allDBProducts = useSelector((state) => state.products.allDBProducts);

  useEffect(() => {
    if (!allDBProducts.length) {
      dispatch(getAllDBProductsAsync());
    }
  }, [allDBProducts, dispatch]);

  return (
    <div className="adminContainer">
      <div className="adminDashboard adminProducts">
        <div className="d-flex justify-content-center gap-3 mb-3">
          <Searchbar content="Product" />
          <NavLink
            className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
            to="/CreateProduct"
          >
            New Product
          </NavLink>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap">
          <Products_CategoriesTable
            products={allDBProducts}
            name={"Products"}
            ruta={"/UpdateProduct/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
