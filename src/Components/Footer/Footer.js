import React from "react";
import { Newsletter } from "../Newsletter/Newsletter";
import { NavLink } from "react-router-dom";
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-menu">
        <NavLink className='footer-link' to='/'>
          <p>HOME</p>
        </NavLink>
        <NavLink className='footer-link' to='/about'>
          <p>ABOUT US</p>
        </NavLink>
        <NavLink className='footer-link' to='/cart'>
          <p>SHOPPING CART</p>
        </NavLink>
        <NavLink className='footer-link' to='/newsletter'>
          <p>NEWSLETTER</p>
        </NavLink>
      </div>
      
      <div className="store-name">
        <h3 className="footer-h3">STORE NAME</h3>
      </div>

      <Newsletter /> 

    </div>
  );
};
