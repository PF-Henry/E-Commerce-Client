import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { NavLink, Link } from "react-router-dom";
import { MdExitToApp, MdOutlineFavorite } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { SiHexo } from "react-icons/si";
import { RiSettings3Fill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import "./Dashboard.css";

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          className="bg-purple-dark d-flex align-items-center letter-spacing text-white ps-4 py-3"
        >
          <Link
            to="/"
            className="navbar-brand text-white d-flex align-items-center letter-spacing"
          >
            <SiHexo fontSize={"2.3rem"} />
            <div className="fs-4 pb-1">exa</div>
            <div className="fw-bold text-aqua fs-4 pb-1">tech</div>
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-purple-dark text-white letter-spacing">
        <div className="d-flex justify-content-center mt-4">
          <div className="d-flex flex-column align-items-center gap-1">
            <BsPersonCircle size={"4rem"} />
            User
          </div>
        </div>
        <Menu iconShape="circle">
          <MenuItem icon={<MdOutlineFavorite size={"1.2rem"} />}>
            Favorites
            <Link to="/user/favorites" />
          </MenuItem>
          <MenuItem icon={<FaClipboardList size={"1.2rem"} />}>
            Orders
            <Link to="/user/orders" />
          </MenuItem>
          <MenuItem icon={<BsStarFill size={"1.2rem"} />}>
            Reviews
            <Link to="/user/reviews" />
          </MenuItem>
          <MenuItem icon={<RiSettings3Fill size={"1.2rem"} />}>
            Settings
            <Link to="/user/settings" />
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter className="bg-purple-dark">
        <div className="sidebar-btn-wrapper py-3">
          <NavLink
            to="/"
            className="adminNavLink d-flex align-items-center aqua-hover sidebar-btn text-white"
          >
            <div className="nav-item letter-spacing nav-li-font d-flex align-items-center gap-1">
              SIGN OUT <MdExitToApp size={"1.6rem"} />
            </div>
          </NavLink>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
