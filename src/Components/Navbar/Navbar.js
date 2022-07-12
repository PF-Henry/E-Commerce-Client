import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { SiHexo } from "react-icons/si";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg navbar_container d-flex justify-content-center fixed-top animate__animated animate__fadeInDown">
        <div className="d-flex justify-content-center divColor">
          <div className="logoDiv navbar-brand">
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
            className="collapse navbar-collapse display_around"
            id="navbarSupportedContent"
          >
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul> */}

            <Searchbar />

            <ul className="navbar-nav">
              <li className="nav-item letter-spacing d-flex align-items-center nav-li-font aqua-hover">
                ABOUT US
              </li>
              <Link
                to="/admin"
                className="adminNavLink d-flex align-items-center gap-1 aqua-hover"
              >
                <li className="nav-item letter-spacing nav-li-font ">SIGN IN</li>
                <CgProfile size={"1.6rem"} />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
