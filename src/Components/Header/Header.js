import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import { SliderEmpty } from "../Slider/SliderEmpty";
import { useDispatch } from "react-redux";
import './Header.css';



const Header = () => {
  const dispatch = useDispatch();
  let [showSlider, setShowSlider] = useState(true);
  let [txtBtnSlider, setTxtBtnSlider] = useState('Disable Slider');

  let switchSlider = () => {
    if (showSlider) {
      setShowSlider(showSlider = false);
      setTxtBtnSlider(txtBtnSlider = 'Enable Slider'); 
    } else {
      setShowSlider(showSlider = true);
      setTxtBtnSlider(txtBtnSlider = 'Disable Slider'); 
    }
    window.scrollTo(0, 0);
  }

  console.log(showSlider);
  

  return (
    <div className="header">
      <Navbar />
      {
        showSlider? <Slider /> : <SliderEmpty />
      }
      <button className="btnDisableSlider animate__animated animate__rotateInDownRight" onClick={ () => switchSlider() } > { txtBtnSlider } </button>
    </div>
  );
};

export default Header;
