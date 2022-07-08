import React from 'react';
import './Sliderbrands.css'

export const Sliderbrands = () => {
  return (
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class="d-block w-100" src="./images/SliderBG.png" alt="First slide" />
          <div class="carousel-caption  d-md-block">
            <h1 className='carousel-caption-h1'>SAMSUNG</h1>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="./images/SliderBG.png" alt="Second slide" />
          <div class="carousel-caption d-md-block">
            <h1 className='carousel-caption-h1'>APPLE</h1>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="./images/SliderBG.png" alt="Third slide" />
          <div class="carousel-caption  d-md-block">
            <h1 className='carousel-caption-h1'>HUAWEI</h1>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  )
}
