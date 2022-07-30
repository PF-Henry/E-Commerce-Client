import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import "react-pro-sidebar/dist/css/styles.css";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../../../Redux/productSlice";

function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const allUsers = useSelector((state) => state.products.usersLoaded)
  const userId = useSelector((state) => state.products.roleId)
  const userInfo = allUsers.filter(user => user.id === userId)
  const [userName] = userInfo.map(e => e.first_name)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsersAsync());
    }
  });

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <SideBar toggled={toggled} handleToggleSidebar={handleToggleSidebar} user={userName}/>
      <Main toggled={toggled} handleToggleSidebar={handleToggleSidebar}/>
    </div>
  );
}

export default Layout;
