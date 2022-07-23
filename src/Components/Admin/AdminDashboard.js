import React from "react";
import AdminNavBar from "./AdminNavBar";
import "./AdminDashboard.css";
import AdminSideBar from "./AdminSideBar";
import AdminHome from "./AdminHome";
import UserSideBar from "../User/UserSideBar";
import UserHome from "../User/UserHome";


const AdminDashboard = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <AdminNavBar />

      <div className="adminContainer">
        <div className="animate__animated animate__fadeInLeft sideBar">
          <AdminSideBar />
        </div>
        <AdminHome />
      </div>
    </div>
  );
};

export default AdminDashboard;
