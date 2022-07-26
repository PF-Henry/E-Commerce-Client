import React from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main className="bg-secondary bg-opacity-10">
      <div
        className="btn-toggle position-fixed"
        onClick={() => handleToggleSidebar(true)}
      >
        <FaBars size={"1.2rem"} />
      </div>
      <Outlet />
    </main>
  );
};

export default Main;
