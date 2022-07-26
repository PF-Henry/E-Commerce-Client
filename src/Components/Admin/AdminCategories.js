import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getCategoriesAsync } from "../../Redux/productSlice";
import { createCategoryAsync } from "../../Redux/productSlice";
import "./AdminDashboard.css";

const AdminCategories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.products.categoriesLoaded);

  const [category, setCategory] = useState({name : ''})

  function handleInputChange(e) {
    setCategory({
        name: e.target.value
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
          <Searchbar content="Category" />
          <button
            className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
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
              <div className="form-group">
                  <label htmlFor="name" className="formItem">
                  Name
                  </label>
                  <input
                  type="text"
                  onChange={handleInputChange}
                  className="form-control"
                  name="name"
                  value={category.name}
                  placeholder="Name"
                  />
              </div>
              <div className="mb-5 d-flex justify-content-center mt-4">
                  <input
                  className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                  type="button"
                  value="Create Category"
                  onClick={onClickCreate}
                  />
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap">
          <Products_CategoriesTable
            products={allCategories}
            name={"Categories"}
            ruta={"/admin/UpdateCategory/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
