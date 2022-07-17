import React, { useState} from "react";
import AdminNavBar from "../Admin/AdminNavBar";
import UserHome from "./UserHome";
import { FaHome, FaCog, FaShoppingCart, FaHeart } from "react-icons/fa";
import './UserStyles.css'
import UserPurchases from "./UserPurchases";
import UserFavs from "./UserFavs";

const UserDashboard = () => {
    const [link, setLink] = useState('');

  function handleClick (e) {
      setLink(e.target.innerText)
  }

  function menu () {
    switch (link) {
      case 'Home':
        return <UserHome />
      case 'My Purchases':
        return <UserPurchases />
      case 'My Favorites':
        return <UserFavs />
    //   case 'Settings':
    //     return <AdminOrders />
      default:
        return <UserHome />
    }
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <AdminNavBar />

      <div className="userContainer">
        <div className="sideBar animate__animated animate__fadeInLeft">
            <div className="mx-auto sideUser">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" className="img-fluid rounded-circle w-50 p-3" alt="User-Profile-Image"/>
            </div>
            <h6 className="mx-auto menuUsername">Username</h6>

          <div className="userMenu">
            <p className='userMenuLink' onClick={e => handleClick(e)}>
            <p className="userMenuIcon"><FaHome/></p>
            Home
            </p>
            <p className='userMenuLink' onClick={e => handleClick(e)}>
            <p className="userMenuIcon"><FaShoppingCart/></p>
            My Purchases
            </p>
            <p className='userMenuLink' onClick={e => handleClick(e)}>
            <p className="userMenuIcon"><FaHeart/></p>
            My Favorites
            </p>
            <p className='userMenuLink' onClick={e => handleClick(e)}>
            <p className="userMenuIcon"><FaCog/></p>
            Settings
            </p>
          </div>
        </div>

        { menu() }
      </div>
    </div>
  );
}

export default UserDashboard;