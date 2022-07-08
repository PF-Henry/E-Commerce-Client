import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import './Navbar.css';

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar_container d-flex justify-content-center">
        <div className="d-flex justify-content-center divColor">
          <div className="logoDiv">
            <a className="navbar-brand" href="#">NaMe</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse display_around" id="navbarSupportedContent">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> 
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul> */}
      
            <Searchbar />

            <ul className="navbar-nav">
              <li className="nav-item active">ABOUT US</li>
              <li>MY ACCOUNT</li>
            </ul>

          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
