import React from "react";
import { Newsletter } from "../Newsletter/Newsletter";
import { NavLink } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import { toast } from "react-toastify";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-md py-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <div
              className="text-white d-flex align-items-center letter-spacing"
              onClick={() => {
                toast.warning("Bebito fiu fiu!", {
                  theme: "dark",
                });
              }}
            >
              <SiHexo fontSize={"4rem"} />
              <div className="d-flex pb-1">
                <div className="fs-1">exa</div>
                <div className="fw-bold text-aqua fs-1">tech</div>
              </div>
            </div>
          </div>
          <div className="nav-li-font d-flex flex-column text-center col-md-6 gap-2 col-lg-4 mb-4 mb-lg-0">
            <NavLink
              className="text-decoration-none text-white aqua-hover letter-spacing"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="text-decoration-none text-white aqua-hover letter-spacing"
              to="/auth/about"
            >
              ABOUT US
            </NavLink>
            <NavLink
              className="text-decoration-none text-white aqua-hover letter-spacing"
              to="/auth/cart"
            >
              SHOPPING CART
            </NavLink>
          </div>

          <div className="col-md-12 col-lg-4 d-flex justify-content-center">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
};
