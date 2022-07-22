import React from "react";
import Navbar from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import { SliderEmpty } from "../Slider/SliderEmpty";
import { useDispatch, useSelector } from "react-redux";
import { setShowSlider } from "../../Redux/productSlice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const showSlider = useSelector((state) => state.products.showSlider);
  const search = useSelector((state) => state.products.search);

  let switchSlider = () => {
    dispatch(setShowSlider(!showSlider));

    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <Navbar />
      {showSlider && search === "" ? <Slider /> : <SliderEmpty />}
      {search === "" && (
        <button
          className="btnDisableSlider animate__animated animate__rotateInDownRight"
          onClick={() => switchSlider()}
        >
          {showSlider ? "Disable Slider" : "Enable Slider"}
        </button>
      )}
    </div>
  );
};

export default Header;
