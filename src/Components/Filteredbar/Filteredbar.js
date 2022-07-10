import React, { useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { IoOptions } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getBrandsAsync, getCategoriesAsync, switchItemsPerPage } from "../../Redux/productSlice";
import "./Filteredbar.css";

const Filteredbar = ( { itemsPerPage, setCurrentPage, currentPage } ) => {
  let allBrands = useSelector((state) => state.products.brandsLoaded);
  let allCategories = useSelector((state) => state.products.categoriesLoaded);
  // let allProducts = useSelector((state) => state.products.productsLoaded);


  const dispatch = useDispatch();

  useEffect(() => {
    if (!allBrands.length) {
      dispatch(getBrandsAsync());
    }
  }, [allBrands, dispatch]);

  useEffect(() => {
    if (!allCategories.length) {
      dispatch(getCategoriesAsync());
    }
  }, [allCategories, dispatch]);

  const itemsPerPageSelected = (e) => {
    let numberItems =  parseInt( e.target.value );
    dispatch(switchItemsPerPage(numberItems))
  }

 


  return (
    <div className="filterBG ">
      <div className="d-flex align-items-baseline justify-content-around mt-5 flex-wrap gap-3">
        <div className="d-flex gap-2">
          <div
            className="btn px-3 bg-purple-dark text-white d-flex align-items-center gap-1 filterBtn border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <IoOptions fontSize={"1.5rem"} />
            Filter
          </div>

          <div className="form-floating" style={{ width: "150px" }}>
            <select
              className="form-select bg-purple-dark text-white"
              id="resultsPerPage"
              aria-label="Floating label select example"
              defaultValue={1}
              onChange={e => itemsPerPageSelected(e)}
            >
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>

            </select>
            <label htmlFor="resultsPerPage" className="text-white">
              Results per page
            </label>
          </div>

          <div className="form-floating" style={{ width: "200px" }}>
            <select
              className="form-select bg-purple-dark text-white"
              id="sortBy"
              aria-label="Floating label select example"
              defaultValue={1}
            >
              <option value="1">Newest Arrivals</option>
              <option value="2">Price (Low to High)</option>
              <option value="3">Price (High to Low)</option>
              <option value="4">Avg. Customer Review</option>
            </select>
            <label htmlFor="sortBy" className="text-white">
              Sort by
            </label>
          </div>
        </div>
        <Pagination  itemsPerPageSelected={itemsPerPageSelected}  itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}  />
      </div>

      {/* Side menu */}
      <div
        className="offcanvas offcanvas-start overflow-auto"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header bg-light">
          <h5
            className="offcanvas-title fw-bold letter-spacing d-flex align-items-center gap-1"
            id="offcanvasExampleLabel"
          >
            <IoOptions fontSize={"1.5rem"} />
            Filter
          </h5>
          <button
            type="button"
            className="btn-close text-reset me-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className="m-0" />
        <div className="d-flex flex-column ms-4">
          <h5 className="text-start ms-3 fw-bold letter-spacing mt-3">
            Categories
          </h5>
          {allCategories.map((category) => (
            <div
              className="form-check text-start letter-spacing"
              key={category.id}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value={category.name}
                id={category.id}
              />
              <label className="form-check-label" htmlFor={category.id}>
                {category.name}
              </label>
            </div>
          ))}

          <h5 className="text-start ms-3 fw-bold letter-spacing mt-3">
            Brands
          </h5>
          {allBrands.map((brand) => (
            <div
              className="form-check text-start letter-spacing"
              key={brand.id}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value={brand.name}
                id={brand.id}
              />
              <label className="form-check-label" htmlFor={brand.id}>
                {brand.name}
              </label>
            </div>
          ))}

          <h5 className="text-start ms-3 fw-bold letter-spacing mt-3">
            Availability
          </h5>
          <div className="form-check text-start letter-spacing">
            <input
              className="form-check-input"
              type="checkbox"
              value="availability"
              id="availability"
            />
            <label className="form-check-label" htmlFor="availability">
              Include Out of Stock
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filteredbar;
