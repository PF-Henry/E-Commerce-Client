import React from "react";
import "./AdminDashboard.css";
import AdminHome from "./AdminHome";

const AdminDashboard = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="adminContainer">
        <AdminHome />
      </div>
    </div>
  );
};

export default AdminDashboard;
