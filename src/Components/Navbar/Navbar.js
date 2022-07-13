import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { SiHexo } from "react-icons/si";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top animate__animated animate__fadeInDown bg-purple-dark-90 text-white">
      <div className="container-md">
        <div className="navbar-brand basis">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mb-2 mx-auto mb-lg-0 d-flex justify-content-center">
            <Searchbar />
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center">
              ABOUT US
            </li>
            <Link
              to="/admin"
              className="nav-link adminNavLink d-flex align-items-center aqua-hover justify-content-center"
            >
              <div className="letter-spacing nav-li-font d-flex align-items-center gap-1">
                SIGN IN <CgProfile size={"1.6rem"} />
              </div>
            </Link>
            <li className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center">
              <HiShoppingCart size={"1.6rem"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
