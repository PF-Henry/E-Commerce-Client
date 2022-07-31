import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductsCategoriesTable from "../Tables/ProductsTable";
import { getBrandsAsync, createBrandAsync } from "../../Redux/productSlice";
import "./AdminDashboard.css";

const AdminBrands = () => {
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.products.brandsLoaded);

  const [brand, setBrand] = useState({ name: "" });

  function handleInputChange(e) {
    setBrand({
      name: e.target.value,
    });
  }

  function onClickCreate(e) {
    dispatch(createBrandAsync(brand));
    alert("Brand created");
  }

  useEffect(() => {
    if (!allBrands.length) {
      dispatch(getBrandsAsync());
    }
  }, [allBrands, dispatch]);

  return (
    <div>
      <div className="text-purple fs-1 fw-bold mt-3">Brands</div>
      <div className="mt-4">
        <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap-reverse align-items-center">
          <Searchbar content="Brand" />
          <button
            className="btn btn-success bg-purple-dark addToCartBtn border-0 py-1 mt-3 mt-lg-0 letter-spacing"
            data-toggle="collapse"
            href="#collapseExample"
            aria-controls="multiCollapseExample1"
          >
            New Brand
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
                  value={brand.name}
                  placeholder="Name"
                />
              </div>
              <div className="mb-5 d-flex justify-content-center mt-4">
                <input
                  className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                  type="button"
                  value="Create Brand"
                  onClick={onClickCreate}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap">
          <ProductsCategoriesTable
            products={allBrands}
            name={"Brands"}
            ruta={"/admin/UpdateBrand/"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminBrands;
