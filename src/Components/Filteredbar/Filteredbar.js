import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { IoOptions } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import {
  getBrandsAsync,
  getCategoriesAsync,
  changeSorting,
  changeFilter,
  switchItemsPerPage,
  changeBrandsFilter,
} from "../../Redux/productSlice";
import "./Filteredbar.css";
import { SORTING_ARRAY } from "../../Constants/sorting";

const Filteredbar = ({
  itemsPerPage,
  setCurrentPage,
  currentPage,
  productsArray,
}) => {
  const allBrands = useSelector((state) => state.products.brandsLoaded);
  const allCategories = useSelector((state) => state.products.categoriesLoaded);
  const sortingMethod = useSelector((state) => state.products.sorting);
  const [filters, setFilters] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);
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
    let numberItems = parseInt(e.target.value);
    dispatch(switchItemsPerPage(numberItems));
  };

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

          {/* Results per Page */}
          <div className="form-floating" style={{ width: "150px" }}>
            <select
              className="form-select bg-purple-dark text-white"
              id="resultsPerPage"
              aria-label="Floating label select example"
              defaultValue={1}
              onChange={(e) => itemsPerPageSelected(e)}
            >
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
            <label htmlFor="resultsPerPage" className="text-white">
              Results per page
            </label>
          </div>

          {/* Sorting */}
          <div className="form-floating" style={{ width: "200px" }}>
            <select
              className="form-select bg-purple-dark text-white"
              id="sortBy"
              aria-label="Floating label select example"
              onChange={(e) => dispatch(changeSorting(e.target.value))}
              value={sortingMethod}
            >
              {SORTING_ARRAY.map((element, index) => (
                <option value={element} key={index}>
                  {element}
                </option>
              ))}
            </select>
            <label htmlFor="sortBy" className="text-white">
              Sort by
            </label>
          </div>
        </div>
        <Pagination
          itemsPerPageSelected={itemsPerPageSelected}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          productsArray={productsArray}
        />
      </div>

      {/* Side Menu */}
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
                onChange={(e) =>
                  filters.includes(e.target.value)
                    ? setFilters((filters) =>
                        filters.filter((option) => option !== e.target.value)
                      )
                    : setFilters([...filters, e.target.value])
                }
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
                onChange={(e) =>
                  brandsFilter.includes(e.target.value)
                    ? setBrandsFilter((brandsFilter) =>
                        brandsFilter.filter(
                          (option) => option !== e.target.value
                        )
                      )
                    : setBrandsFilter([...brandsFilter, e.target.value])
                }
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
              // onChange={(e) =>
              //   filters.includes(e.target.value)
              //     ? setFilters((filters) =>
              //         filters.filter((option) => option !== e.target.value)
              //       )
              //     : setFilters([...filters, e.target.value])
              // }
            />
            <label className="form-check-label" htmlFor="availability">
              Include Out of Stock
            </label>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center my-3">
          <div
            className="btn bg-purple-dark text-white filterBtn border-0 py-1"
            onClick={() => {
              dispatch(changeFilter(filters));
              dispatch(changeBrandsFilter(brandsFilter));
            }}
          >
            Apply filter
          </div>
          <div
            className="btn bg-purple-dark text-white filterBtn border-0 py-1"
            onClick={() => {
              var checkboxes = document.getElementsByTagName("input");
              for (var checkbox of checkboxes) {
                checkbox.checked = false;
              }
              setFilters([]);
              dispatch(changeFilter(filters));
              setBrandsFilter([]);
              dispatch(changeBrandsFilter(brandsFilter));
            }}
          >
            Remove filter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filteredbar;
