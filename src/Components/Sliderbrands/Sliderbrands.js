import React from "react";
import "./Sliderbrands.css";

export const Sliderbrands = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="./images/SliderBG.png"
            alt="First slide"
          />
          <div className="carousel-caption  d-md-block">
            <h1 className="carousel-caption-h1">SAMSUNG</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./images/SliderBG.png"
            alt="Second slide"
          />
          <div className="carousel-caption d-md-block">
            <h1 className="carousel-caption-h1">APPLE</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./images/SliderBG.png"
            alt="Third slide"
          />
          <div className="carousel-caption  d-md-block">
            <h1 className="carousel-caption-h1">HUAWEI</h1>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};
