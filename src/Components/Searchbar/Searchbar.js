import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetError, searchProductAsync } from "../../Redux/productSlice";
import { FiSearch } from "react-icons/fi";
import "./Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(searchProductAsync(e.target.value));
  };

  const handleSubmit = (e) => {
    dispatch(resetError())
    dispatch(searchProductAsync(search));
    setSearch("");
  };

  return (
    <div className="input-group input-group-sm div--Serchbar mt-3 mt-lg-0">
      <input
        value={search}
        className="form-control input--SearchBar"
        placeholder="Search Product"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn--Searchbar d-flex align-items-center px-3"
        onClick={(e) => handleSubmit(e)}
      >
        <FiSearch size={"1.1rem"} />
      </button>
    </div>
  );
};

export default Searchbar;
