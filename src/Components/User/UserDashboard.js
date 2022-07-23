import React from "react";
import AdminNavBar from "../Admin/AdminNavBar";
import UserHome from "./UserHome";
import './UserStyles.css'
import UserSideBar from "./UserSideBar";

const UserDashboard = () => {

  return (
    <div className="animate__animated animate__fadeIn">
      <AdminNavBar />

      <div className="userContainer">
        <div className="animate__animated animate__fadeInLeft sideBar">
            <div className="mx-auto sideUser">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8f7VOnz8lNzJYkzplysK2YOloLjzJoT8LA&usqp=CAU" className="img-fluid rounded-circle w-50 p-3" alt=""/>
            </div>
            <h6 className="mx-auto menuUsername">Username</h6>
          <UserSideBar />
        </div>
        <UserHome />
      </div>
    </div>
  );
}

export default UserDashboard;