import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import { MdExitToApp } from "react-icons/md";
import "./AdminNavBar.css";

const AdminNavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-purple-dark-90 fixed-top animate__animated animate__fadeInDown">
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <div className="d-flex justify-content-center justify-content-md-end mb-2 mb-lg-0 basis">
            <NavLink
              to="/"
              className="adminNavLink d-flex align-items-center aqua-hover"
            >
              <div className="nav-item letter-spacing nav-li-font d-flex align-items-center gap-1">
                SIGN OUT <MdExitToApp size={"1.6rem"} />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
