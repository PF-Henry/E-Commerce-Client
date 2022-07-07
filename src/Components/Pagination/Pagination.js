import React from "react";
import "./Pagination.css";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center gap-2">
        <li className="page-item">
          <div className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0 px-5">
            Back
          </div>
        </li>
        <li className="page-item">
          <div className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0">
            1
          </div>
        </li>
        <li className="page-item">
          <div className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0">
            2
          </div>
        </li>
        <li className="page-item">
          <div className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0">
            3
          </div>
        </li>
        <li className="page-item">
          <div className="page-link border-0 letter-spacing text-white bg-purple-dark py-1 rounded-0 px-5">
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
