import React from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
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
