import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductsCategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getCategoriesAsync } from "../../Redux/productSlice";
import { createCategoryAsync } from "../../Redux/productSlice";
import "./AdminDashboard.css";

const AdminCategories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.categoriesLoaded);

  const [category, setCategory] = useState({ name: "" });

  function handleInputChange(e) {
    setCategory({
      name: e.target.value,
    });
  }

  function onClickCreate(e) {
    dispatch(createCategoryAsync(category));
  }

  useEffect(() => {
    if (!allCategories.length) {
      dispatch(getCategoriesAsync());
    }
  }, [allCategories, dispatch]);

  return (
    <div className="adminContainer">
      <div className="adminDashboard adminProducts">
        <div className="d-flex justify-content-center gap-3 mb-3">
          {/* <Searchbar content="Category" /> */}
          <button
            className="btn btn-success bg-purple-dark addToCartBtn border-0 py-1 mt-3 mt-lg-0 letter-spacing"
            // to="/CreateCategory"
            data-toggle="collapse"
            href="#collapseExample"
            aria-controls="multiCollapseExample1"
          >
            New Category
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="letter-spacing">
            <form>
              <div className="form-group d-inline-block">
                <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap align-items-center border border-secondary p-4 rounded-3 bg-light mt-3">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    className="form-control create-category-input py-1"
                    name="name"
                    value={category.name}
                    placeholder="Name"
                  />
                  <div className="d-flex justify-content-center">
                    <input
                      className="btn btn-success bg-purple-dark addToCartBtn border-0 py-1 mt-3 mt-lg-0 letter-spacing"
                      type="button"
                      value="Create Category"
                      onClick={onClickCreate}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap">
          <ProductsCategoriesTable
            products={allCategories}
            name={"Categories"}
            ruta={"/admin/categories/update/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
