import React from "react";
import "./ItemsPaging.css";

const ItemsPaging = ({ itemsPerPage, allItems, paging, currentPg }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(allItems / itemsPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <nav>
      <ul className="pagination-container d-flex gap-1 justify-content-center p-0">
        {pageNums &&
          pageNums.map((num) => {
            return (
              <li
                className={`pagination-container-item bg-purple-dark text-white ${
                  currentPg === num && "pagination-container-item-active"
                }`}
                key={num}
              >
                <a onClick={() => paging(num)}>{num}</a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default ItemsPaging;
