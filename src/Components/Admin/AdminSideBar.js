import React from "react";
import { NavLink } from 'react-router-dom';
import { FaCog, FaListUl, FaThLarge, FaBox, FaHome, FaUser } from "react-icons/fa";


const AdminSideBar = () => { 
    return (
        <div >
            <div className="sideBar animate__animated animate__fadeInLeft">
                <div className="adminMenu">
                    <NavLink to='/admin'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaHome/></p>
                            Home
                        </p>
                    </NavLink>
                    <NavLink to='/admin/products'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaBox/></p>
                            Products    
                        </p>
                    </NavLink>
                    <NavLink to='/admin/categories'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaThLarge/></p>
                            Categories
                        </p>
                    </NavLink>
                    <NavLink to='/admin/orders'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaListUl/></p>
                            Orders
                        </p>
                    </NavLink>
                    <NavLink to='/admin/users'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaUser/></p>
                            Users
                        </p>   
                    </NavLink>
                    <NavLink to='/admin/settings'>
                        <p className='adminMenuLink'>
                            <p className="adminMenuIcon"><FaCog/></p>
                            Settings
                        </p>
                    </NavLink>
                </div>
            </div> 
      </div>
    )
}

export default AdminSideBar;