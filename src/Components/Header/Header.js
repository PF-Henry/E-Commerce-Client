import React from "react";
import Navbar from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Slider />
    </div>
  );
};

export default Header;
