import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import {
  MdExitToApp,
  MdOutlineFavorite,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { SiHexo } from "react-icons/si";
import { RiSettings3Fill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import "./Dashboard.css";
import { logoutAsync } from "../../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
  const cartItems = useSelector((state) => state.products.cartItems);
  let quantities = cartItems.reduce((total, obj) => obj.quantity + total, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/");
  };

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
          <MenuItem
            icon={<MdOutlineShoppingCart size={"1.4rem"} />}
            suffix={
              quantities !== 0 && (
                <span className="badge bg-danger rounded-pill">
                  {quantities}
                </span>
              )
            }
          >
            Cart
            <Link to="/auth/cart" />
          </MenuItem>
          <MenuItem icon={<MdOutlineFavorite size={"1.2rem"} />}>
            Favorites
            <Link to="/app/user/favorites" />
          </MenuItem>
          <MenuItem icon={<FaClipboardList size={"1.2rem"} />}>
            Orders
            <Link to="/app/user/orders" />
          </MenuItem>
          <MenuItem icon={<BsStarFill size={"1.2rem"} />}>
            Reviews
            <Link to="/app/user/reviews" />
          </MenuItem>
          <MenuItem icon={<RiSettings3Fill size={"1.2rem"} />}>
            Settings
            <Link to="/app/user/settings" />
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter className="bg-purple-dark">
        <div className="sidebar-btn-wrapper py-3">
          {/* <NavLink
          to="/"
          className="adminNavLink d-flex align-items-center aqua-hover sidebar-btn text-white"
          >
            <div className="nav-item letter-spacing nav-li-font d-flex align-items-center gap-1">
              SIGN OUT <MdExitToApp size={"1.6rem"} />
            </div>
          </NavLink> */}
          <div
            className="nav-item letter-spacing nav-li-font d-flex align-items-center gap-1"
            onClick={() => logout()}
          >
            SIGN OUT <MdExitToApp size={"1.6rem"} />
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
