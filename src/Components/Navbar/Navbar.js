import React, { useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { SiHexo } from "react-icons/si";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdExitToApp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogleAsync, logoutAsync } from "../../Redux/productSlice";
// import { Login } from "../Login/Login";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.products.role);
  useEffect(
    () => {
      dispatch(loginGoogleAsync());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const logout = () => {
    dispatch(logoutAsync());
    window.scrollTo(0, 0);
  };

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
            <Searchbar content={"Product"} />
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <Link
              to="/auth/about"
              className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center"
            >
              ABOUT US
            </Link>
            {role === "Guest" ? (
              <Link
                to="/auth/login"
                className="nav-link adminNavLink d-flex align-items-center aqua-hover justify-content-center"
              >
                <div className="letter-spacing nav-li-font d-flex align-items-center gap-1 aqua-hover">
                  {/* data-toggle="modal" data-target="#exampleModalCenter" */}
                  LOGIN <CgProfile size={"1.6rem"} />
                </div>
              </Link>
            ) : null}

            {role === "User" ? (
              <Link
                to="/app/user"
                className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center gap-1"
              >
                USER
                <div>
                  <CgProfile size={"1.6rem"} />
                </div>
              </Link>
            ) : null}

            {role === "Admin" ? (
              <Link
                to="/admin/admin"
                className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center gap-1"
              >
                ADMIN
                <div>
                  <CgProfile size={"1.6rem"} />
                </div>
              </Link>
            ) : null}

            {role === "User" ? (
              <Link
                to="/app/user/favorites"
                className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center gap-1"
              >
                FAVS{" "}
                <div>
                  <MdOutlineFavoriteBorder size={"1.6rem"} />
                </div>
              </Link>
            ) : null}

            {role !== "Admin" && (
              <Link
                to="/auth/cart"
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
            )}

            {role !== "Guest" && (
              <div
                className="nav-link adminNavLink nav-item letter-spacing nav-li-font aqua-hover d-flex align-items-center justify-content-center gap-1"
                onClick={() => logout()}
              >
                SIGN OUT
                <div>
                  <MdExitToApp size={"1.6rem"} />
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
