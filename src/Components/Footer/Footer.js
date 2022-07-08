import React from "react";
import { Newsletter } from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="menu">
        <Link to='/'>
          <p>HOME</p>
        </Link>
        <Link to='/about'>
          <p>ABOUT US</p>
        </Link>
        <Link to='/cart'>
          <p>SHOPPING CART</p>
        </Link>
        <Link to='/newsletter'>
          <p>NEWSLETTER</p>
        </Link>
      </div>
      
      <div className="store-name">
        <h3>STORE NAME</h3>
      </div>

      <div className="subscription">
        <p>Subscribe to our newsletter!</p>
        <form>
          <input
          className='input'
          type='email'
          placeholder='Your mail...'
          />
          <button type='submit'>SUBSCRIBE</button>
        </form>
      </div>

    </div>
  );
};
