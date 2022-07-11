import React from "react";
import { NavLink } from 'react-router-dom';
import AdminNavBar from './AdminNavBar'
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <div>
            <AdminNavBar />

            <h2 className="admin_H2">Hello, Admin</h2>

            <div className="adminCardContainer">
                <div className="adminCard">
                    <NavLink className='adminLink' to='/CreateProduct'>
                        <img className="adminCardImg" src="../../images/product-icon.png" />
                        <h3>CREATE PRODUCT</h3>
                    </NavLink>
                </div> 

                <div className="adminCard">
                    <NavLink className='adminLink' to='/'>
                        <img className="adminCardImg" src="../../images/category-icon.png" />
                        <h3>CREATE CATEGORY</h3>
                    </NavLink>
                </div> 
            </div>
        </div>
    )
}

export default AdminDashboard;