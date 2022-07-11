import React from 'react';

export const Slider = () => {
  return (
    <div className='slider_container animate__animated animate__fadeIn'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className=''></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className=''></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="./images/SliderBG.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/SliderBG2.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/SliderBG3.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
    </div>
  )
}
