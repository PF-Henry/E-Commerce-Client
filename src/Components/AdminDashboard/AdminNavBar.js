import React from "react";
import { NavLink } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import './AdminNavBar.css'

const AdminNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar_container d-flex justify-content-center fixed-top">
            <div className="d-flex justify-content-center divColor">
            <div className="logoDiv">
                <div className="navbar-brand text-white d-flex align-items-center letter-spacing">
                <SiHexo fontSize={"2.3rem"} />
                <div className="ms-1 fs-4">exa</div>
                <div className="fw-bold text-aqua fs-4">tech</div>
                </div>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse display_around"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav admin_ul">
                    <NavLink to='/' className='adminLink'>
                        <li className="nav-item active">HOME</li>
                    </NavLink>
                    <NavLink to='/CreateProduct' className='adminLink'>
                        <li className="nav-item active">CREATE PRODUCT</li>
                    </NavLink>
                    {/* <NavLink to='/about' className='adminLink'> */}
                        <li className="nav-item active">ABOUT US</li>
                    {/* </NavLink> */}
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default AdminNavBar;