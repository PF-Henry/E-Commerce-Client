import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterOrdersAdmin } from "../../Redux/productSlice";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { ARRAY_FILTER_ORDERS_STATE } from "../../Constants/parameters";
import "./Searchbar.css";

const SearchbarOrders = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(""); // searchbar
  const [stateFilter, setStateFilter] = useState(""); // filtro de estado

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(filterOrdersAdmin({ search: e.target.value, stateFilter })); // busqueda sobre ordersAdminLoaded en el store
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterOrdersAdmin({ search, stateFilter })); // busqueda sobre ordersAdminLoaded en el store
  };

  const handleInputChangeState = (e) => {
    e.preventDefault();
    setStateFilter(e.target.value);
    dispatch(filterOrdersAdmin({ search, stateFilter: e.target.value })); // busqueda sobre ordersAdminLoaded en el store
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearch("");
    setStateFilter("");
    dispatch(filterOrdersAdmin(null)); // busqueda sobre ordersAdminLoaded en el store
  };

  return (
    <div className="d-flex flex-column align-items-center gap-4">
      <div>
        <div className="form-floating" style={{ width: "150px" }}>
          <select
            className="form-select bg-purple-dark text-white"
            id="filterBy"
            aria-label="Floating label select example"
            onChange={handleInputChangeState}
            defaultValue={stateFilter}
          >
            {ARRAY_FILTER_ORDERS_STATE.map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))}
          </select>
          <label htmlFor="filterBy" className="text-white">
            Filter by
          </label>
        </div>
      </div>
      <form className="input-group input-group-sm div--Serchbar mt-3 mt-lg-0 position-relative">
        <input
          value={search}
          className="form-control input--SearchBar"
          placeholder={"Search "}
          onChange={(e) => handleInputChange(e)}
        />
        <div
          className={`text-secondary clear-search-btn d-flex align-items-center pe-1 ${
            search === "" && "d-none"
          }`}
          onClick={(e) => handleClearSearch(e)}
        >
          <MdOutlineClose size={"1.2rem"} />
        </div>
        <button
          className="btn--Searchbar d-flex align-items-center px-3"
          onClick={(e) => handleSubmit(e)}
        >
          <FiSearch size={"1.1rem"} />
        </button>

        {/* Sorting */}
      </form>
    </div>
  );
};

export default SearchbarOrders;
