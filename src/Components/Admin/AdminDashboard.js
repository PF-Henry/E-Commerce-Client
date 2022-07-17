import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import AdminProducts from "./AdminProducts"
import AdminHome from "./AdminHome";
import AdminOrders from './AdminOrders';
import AdminUsers from "./AdminUsers";
import { FaCog, FaListUl, FaThLarge, FaBox, FaHome, FaUser } from "react-icons/fa";
import "./AdminDashboard.css";


const AdminDashboard = () => {

  const [link, setLink] = useState('');

  function handleClick (e) {
      setLink(e.target.innerText)
  }

  function menu () {
    switch (link) {
      case 'Home':
        return <AdminHome />
      case 'Products':
        return <AdminProducts  caso={'Products'}/>
      case 'Categories':
        return <AdminProducts caso={'Categories'} />
      case 'Orders': 
        return <AdminOrders />
      case 'Users': 
        return <AdminUsers />
      default:
        return <AdminHome />
    }
  }
  
  return (
    <div className="animate__animated animate__fadeIn">
      <AdminNavBar />

      <div className="adminContainer">
        <div className="sideBar animate__animated animate__fadeInLeft">

          <div className="adminMenu">
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaHome/></p>
                Home
              </p>
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaBox/></p>
                Products
              </p>
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaThLarge/></p>
                Categories
              </p>
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaListUl/></p>
                Orders
              </p>
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaUser/></p>
                Users
              </p>
              <p className='adminMenuLink' onClick={e => handleClick(e)}>
                <p className="adminMenuIcon"><FaCog/></p>
                Settings
              </p>
          </div>
        </div> 

        { menu() }

        {/* <div className="d-flex justify-content-center gap-3 mb-3">
          <NavLink
            className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
            to="/CreateProduct"
          >
            Create a Product
          </NavLink>
          {/* <NavLink
            className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
            to="/"
          >
            Create a Category
          </NavLink> *
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
