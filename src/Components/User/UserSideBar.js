import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCog, FaShoppingCart, FaHeart } from "react-icons/fa";

const UserSideBar = () => {
    return (
        <div className="userMenu">
            <NavLink to='/user'>
                <p className='userMenuLink'>
                <p className="userMenuIcon"><FaHome/></p>
                    Home
                </p>
            </NavLink>
            <NavLink to='/cart'>
                <p className='userMenuLink'>
                <p className="userMenuIcon"><FaShoppingCart/></p>
                    My Cart
                </p>
            </NavLink>
            <NavLink to='/user/favorites'>
                <p className='userMenuLink'>
                <p className="userMenuIcon"><FaHeart/></p>
                    My Favorites
                </p>
            </NavLink>
            <NavLink to='/user/settings'>
            <p className='userMenuLink'>
            <p className="userMenuIcon"><FaCog/></p>
                Settings
            </p>
            </NavLink>
      </div>
    )
}

export default UserSideBar;