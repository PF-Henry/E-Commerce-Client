import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import { MdExitToApp } from "react-icons/md";
import "./AdminNavBar.css";

const AdminNavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar_container d-flex justify-content-center fixed-top">
      <div className="d-flex justify-content-center divColor">
        <div className="logoDiv">
          <Link
            to="/"
            className="navbar-brand text-white d-flex align-items-center letter-spacing"
          >
            <SiHexo fontSize={"2.3rem"} />
            <div className="fs-4 pb-1">exa</div>
            <div className="fw-bold text-aqua fs-4 pb-1">tech</div>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse display_around2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav admin_ul">
            <NavLink
              to="/"
              className="adminNavLink d-flex align-items-center gap-1 aqua-hover"
            >
              <li className="nav-item letter-spacing nav-li-font">SIGN OUT</li>
              <MdExitToApp size={"1.6rem"} />
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
