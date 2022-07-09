import React from "react";
import Pagination from "../Pagination/Pagination";
import { IoOptions } from "react-icons/io5";
import "./Filteredbar.css";

const Filteredbar = () => {
  return (
    <div>
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
            >
              <option value="1">8</option>
              <option value="2">12</option>
              <option value="3">16</option>
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
        <Pagination />
      </div>

      {/* Side menu */}
      <div
        className="offcanvas offcanvas-start"
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
          <div class="form-check text-start letter-spacing">
            <input
              class="form-check-input"
              type="checkbox"
              value="category1"
              id="category1"
            />
            <label class="form-check-label" htmlFor="category1">
              Category 1
            </label>
          </div>
          <div class="form-check text-start letter-spacing">
            <input
              class="form-check-input"
              type="checkbox"
              value="category2"
              id="category2 "
            />
            <label class="form-check-label" htmlFor="category2  ">
              Category 2
            </label>
          </div>
          <h5 className="text-start ms-3 fw-bold letter-spacing mt-3">
            Brands
          </h5>
          <div class="form-check text-start letter-spacing">
            <input
              class="form-check-input"
              type="checkbox"
              value="brand1"
              id="brand1"
            />
            <label class="form-check-label" htmlFor="brand1">
              Brand 1
            </label>
          </div>
          <div class="form-check text-start letter-spacing">
            <input
              class="form-check-input"
              type="checkbox"
              value="brand2"
              id="brand2"
            />
            <label class="form-check-label" htmlFor="brand2">
              Brand 2
            </label>
          </div>
          <h5 className="text-start ms-3 fw-bold letter-spacing mt-3">
            Availability
          </h5>
          <div class="form-check text-start letter-spacing">
            <input
              class="form-check-input"
              type="checkbox"
              value="availability"
              id="availability"
            />
            <label class="form-check-label" htmlFor="availability">
              Include Out of Stock
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filteredbar;
