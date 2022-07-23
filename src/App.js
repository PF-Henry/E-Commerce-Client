import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateForm from "./Components/CreateForm/CreateForm";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { UpdateProduct } from "./Components/UpdateProduct/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Cart from "./Pages/Cart/Cart";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Login } from "./Components/Login/Login";
import { SignIn } from "./Components/SignIn/SignIn";

import UserDashboard from "./Components/User/UserDashboard";
import Layout from "./Components/SideBar/Layout";
import UserSettings from "./Components/User/UserSettings";
import UserFavs from "./Components/User/UserFavs";
import AdminProducts from "./Components/Admin/AdminProducts";
import AdminCategories from "./Components/Admin/AdminCategories";
import AdminOrders from "./Components/Admin/AdminOrders";
import AdminUsers from "./Components/Admin/AdminUsers";
import AdminSettings from "./Components/Admin/AdminSettings";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/CreateProduct" element={<CreateForm />} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/sidebarTest" element={<Layout />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/favorites" element={<UserFavs />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/categories' element={<AdminCategories />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/settings' element={<AdminSettings />} />
      </Routes>
    </div>
  );
}

export default App;
