import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Slider.css';


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
            <div className='slider-info'>
              <div className='slider-info-box'>
                <h1 className='animate__animated animate__bounceInDown slider-info-title'> <span className='slider-info--color'>WELCOME</span></h1>
                <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>TO OUR AMAZING</p>
                <h1 className='animate__animated animate__bounceInDown slider-info-title--right'> <span className='slider-info--color'>TECH STORE</span></h1>
              </div>

              <div className=' animate__animated animate__fadeInDown scrollText scrollDown'>
                <h2 className='txtIconDown--txt'>SCROLL DOWN TO SEE OUR PRODUCTS</h2>
                <p className='txtIconDown'> <IoIosArrowDown/> </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/SliderBG2.png" alt="Second slide" />

            <div className='slider-info'>
              <div className='slider-info-box'>
                  <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>SEARCH  YOUR</p>
                  <h1 className='animate__animated animate__bounceInDown slider-info-title'> <span className='slider-info--color'>FAVORITE</span></h1>
                  <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>TECHNOLOGY</p>
                  <h1 className='animate__animated animate__bounceInDown slider-info-title--right'> <span className='slider-info--color'>PRODUCT</span></h1>
              </div>

              <div className=' animate__animated animate__fadeInDown scrollText scrollDown'>
                <h2 className='txtIconDown--txt'>SCROLL DOWN TO SEE OUR PRODUCTS</h2>
                <p className='txtIconDown'> <IoIosArrowDown/> </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/SliderBG3.png" alt="Third slide" />

            <div className='slider-info'>
              <div className='slider-info-box'>
                  <p className='slider-info--txtSpace animate__animated animate__bounceInDown slider-info-txt'>THE BEST </p>
                  <h1 className='animate__animated animate__bounceInDown slider-info-title'> <span className='slider-info--color'>BRANDS</span></h1>
                  <h1 className='animate__animated animate__bounceInDown slider-info-title--right'> <span className='slider-info--color'>ARE HERE!!</span></h1>
              </div>

              <div className=' animate__animated animate__fadeInDown scrollText scrollDown'>
                <h2 className='txtIconDown--txt'>SCROLL DOWN TO SEE OUR PRODUCTS</h2>
                <p className='txtIconDown'> <IoIosArrowDown/> </p>
              </div>

            </div>
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
