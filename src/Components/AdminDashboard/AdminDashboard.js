import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import { useSelector, useDispatch } from "react-redux";
import "./AdminDashboard.css";
import ProductsTable from "../../ProductsTable/ProductsTable";
import { FaRegSmileBeam } from "react-icons/fa";
// import CreateForm from "../CreateForm/CreateForm";
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
    <div>
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
        {/* <!-- Button trigger modal --> */}
        {/* <button
          type="button"
          className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create a Product (Modal)
        </button> */}

        {/* <!-- Modal --> */}
        {/* <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <CreateForm />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> */}
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
