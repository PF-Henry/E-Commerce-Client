import React, { useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import "react-pro-sidebar/dist/css/styles.css";
import "./Layout.css";

function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <SideBar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <Main toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}

export default Layout;
