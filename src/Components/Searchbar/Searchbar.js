import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductAsync } from "../../Redux/productSlice";
import "./Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(searchProductAsync(search));
    setSearch("");
  };

  return (
    <div className="div--Serchbar">
      <input
        value={search}
        className="input--SearchBar"
        placeholder="Search Product"
        onChange={(e) => handleInputChange(e)}
      />
      <button className="btn--Searchbar" onClick={(e) => handleSubmit(e)}>
        SEARCH
      </button>
    </div>
  );
};

export default Searchbar;
