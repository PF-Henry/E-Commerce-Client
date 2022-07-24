import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { SiHexo } from "react-icons/si";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { Login } from "../Login/Login";

import { useSelector } from "react-redux/es/exports";
import "./Navbar.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  let quantities = cartItems.reduce((total, obj) => obj.quantity + total, 0);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top animate__animated animate__fadeInDown  text-white bgNavResponsive">
      <div className="container-md ">
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
            <Searchbar content={'Product'}/>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <Link
              to="/about"
              className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center"
            >
              ABOUT US
            </Link>
            <Link
              to="/login"
              className="nav-link adminNavLink d-flex align-items-center aqua-hover justify-content-center"
            >
              <div className="letter-spacing nav-li-font d-flex align-items-center gap-1 aqua-hover" >
              {/* data-toggle="modal" data-target="#exampleModalCenter" */}
                LOGIN <CgProfile size={"1.6rem"} />
              </div>
            </Link>
            <Link
              to="/user"
              className="nav-link adminNavLink d-flex align-items-center aqua-hover justify-content-center"
            >
              <div className="letter-spacing nav-li-font d-flex align-items-center gap-1">
                USER <CgProfile size={"1.6rem"} />
              </div>
            </Link>
            <Link
              to="/admin"
              className="nav-link adminNavLink d-flex align-items-center aqua-hover justify-content-center"
            >
              <div className="letter-spacing nav-li-font d-flex align-items-center gap-1">
                ADMIN <CgProfile size={"1.6rem"} />
              </div>
            </Link>
            <Link
              to="/cart"
              className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center gap-1"
            >
              CART{" "}
              <div className="position-relative">
                <MdOutlineShoppingCart size={"1.6rem"} />
                {quantities !== 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {quantities}
                  </span>
                )}
              </div>
            </Link>

            {/* <div>
              <button className="" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
