import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductsTable from "../Tables/Products";
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
    <div>
      <div className="text-purple fs-1 fw-bold mt-3">Products</div>
      <div className="mt-4">
        <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap-reverse align-items-center">
          <Searchbar content="Product" />
          <NavLink
            className="btn btn-success bg-purple-dark addToCartBtn border-0 py-1 mt-3 mt-lg-0 letter-spacing"
            to="/admin/admin/products/create"
          >
            New Product
          </NavLink>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap">
          <ProductsTable
            products={allDBProducts}
            ruta={"/admin/admin/products/update/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
