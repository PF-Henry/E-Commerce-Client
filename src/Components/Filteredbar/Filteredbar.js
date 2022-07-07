import React from "react";
import Pagination from "../Pagination/Pagination";

const Filteredbar = () => {
  return (
    <div className="d-flex align-items-baseline justify-content-around mt-5">
      <div className="form-floating" style={{ width: "200px" }}>
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
        <label for="resultsPerPage" className="text-white">
          Results per page
        </label>
      </div>
      <Pagination />
      <div className="form-floating" style={{ width: "220px" }}>
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
        <label for="sortBy" className="text-white">
          Sort by
        </label>
      </div>
    </div>
  );
};

export default Filteredbar;
