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
import { MdExitToApp, MdCategory } from "react-icons/md";
import { FaClipboardList, FaTags } from "react-icons/fa";
import { SiHexo } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { RiSettings3Fill, RiShoppingBagFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import "./SideBar.css";

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
            Admin
          </div>
        </div>
        <Menu iconShape="circle">
          <MenuItem icon={<RiShoppingBagFill size={"1.2rem"} />}>
            Products
            <Link to="/admin/admin/products" />
          </MenuItem>
          <MenuItem icon={<MdCategory size={"1.2rem"} />}>
            Categories
            <Link to="/admin/admin/categories" />
          </MenuItem>
          <MenuItem icon={<FaTags size={"1.2rem"} />}>
            Brands
            <Link to="/admin/admin/brands" />
          </MenuItem>
          <MenuItem icon={<FaClipboardList size={"1.2rem"} />}>
            Orders
            <Link to="/admin/admin/orders" />
          </MenuItem>
          <MenuItem icon={<IoPerson size={"1.2rem"} />}>
            Users
            <Link to="/admin/admin/users" />
          </MenuItem>
          <MenuItem icon={<RiSettings3Fill size={"1.2rem"} />}>
            Settings
            <Link to="/admin/admin/settings" />
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
