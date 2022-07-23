import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
  itemsPerPage,
  setCurrentPage,
  currentPage,
  productsArray,
}) => {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 0; i < Math.ceil(productsArray.length / itemsPerPage); i++) {
    pages.push(i + 1);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    // window.scrollTo(0, 0);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage + -1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0 "
        onClick={handleNextbtn}
      >
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li
        className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0"
        onClick={handlePrevbtn}
      >
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
          className={
            currentPage === number
              ? "active page-item page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0"
              : "page-item page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center gap-2">
        <li className="page-item">
          <button
            className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0 px-3"
            disabled={currentPage === pages[0] ? true : false}
            onClick={handlePrevbtn}
          >
            Back
          </button>
        </li>

        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li className="page-item">
          <button
            className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0 px-3"
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
