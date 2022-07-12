import React from "react";
import { Newsletter } from "../Newsletter/Newsletter";
import { NavLink } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container d-flex align-items-center justify-content-around">
      <div className="nav-li-font d-flex flex-column gap-3 text-start">
        <NavLink
          className="text-decoration-none text-white aqua-hover letter-spacing"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="text-decoration-none text-white aqua-hover letter-spacing"
          to="/about"
        >
          ABOUT US
        </NavLink>
        <NavLink
          className="text-decoration-none text-white aqua-hover letter-spacing"
          to="/cart"
        >
          SHOPPING CART
        </NavLink>
        <NavLink
          className="text-decoration-none text-white aqua-hover letter-spacing"
          to="/newsletter"
        >
          NEWSLETTER
        </NavLink>
      </div>

      <div>
        <div className="navbar-brand text-white d-flex align-items-center letter-spacing">
          <SiHexo fontSize={"4rem"} />
          <div className="d-flex pb-1">
            <div className="fs-1">exa</div>
            <div className="fw-bold text-aqua fs-1">tech</div>
          </div>
        </div>
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};
