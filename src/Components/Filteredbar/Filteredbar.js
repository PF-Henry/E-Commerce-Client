import React from "react";
import Pagination from "../Pagination/Pagination";
import { IoOptionsOutline } from "react-icons/io5";

const Filteredbar = () => {
  return (
    <div>
      <div className="d-flex align-items-baseline justify-content-around mt-5 flex-wrap gap-3">
        <div className="d-flex gap-2">
          <div
            className="btn px-3 bg-purple-dark text-white d-flex align-items-center gap-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <IoOptionsOutline fontSize={"1.5rem"} />
            Filter
          </div>

          <div className="form-floating" style={{ width: "150px" }}>
            <select
              className="form-select bg-purple-dark text-white"
              id="resultsPerPage"
              aria-label="Floating label select example"
            >
              <option selected value="1">
                8
              </option>
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
            >
              <option selected value="1">
                Newest Arrivals
              </option>
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
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Filter
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filteredbar;
