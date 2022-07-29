import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetError,
  searchBrandAsync,
  searchCategoryAsync,
  searchProductAsync,
  setSearch,
  changeFilter,
  changeBrandsFilter,
  clearCheckedStatus,
} from "../../Redux/productSlice";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import "./Searchbar.css";

const Searchbar = ({ content }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.products.search);

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(changeFilter([]));
    dispatch(changeBrandsFilter([]));
    dispatch(clearCheckedStatus());
    dispatch(setSearch(e.target.value));
    if (content === 'Category') dispatch(searchCategoryAsync);
    else if (content === 'Brand') dispatch(searchBrandAsync);
    dispatch(searchProductAsync(e.target.value));
  };

  const handleSubmit = (e) => {
    dispatch(resetError());
    dispatch(searchProductAsync(search));
  };

  const handleClearSearch = () => {
    dispatch(setSearch(""));
    dispatch(searchProductAsync(""));
  };

  return (
    <form className="input-group input-group-sm div--Serchbar mt-3 mt-lg-0 position-relative">
      <input
        value={search}
        className="form-control input--SearchBar"
        placeholder={"Search " + content}
        onChange={(e) => handleInputChange(e)}
      />
      <div
        className={`text-secondary clear-search-btn d-flex align-items-center pe-1 ${
          search === "" && "d-none"
        }`}
        onClick={() => handleClearSearch()}
      >
        <MdOutlineClose size={"1.2rem"} />
      </div>
      <Link to="/" className="btn--Searchbar d-flex align-items-center">
        <button
          className="btn--Searchbar d-flex align-items-center px-3"
          onClick={(e) => handleSubmit(e)}
        >
          <FiSearch size={"1.1rem"} />
        </button>
      </Link>
    </form>
  );
};

export default Searchbar;
