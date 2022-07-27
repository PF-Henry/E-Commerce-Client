import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { CreateProduct } from "./Components/Product/CreateProduct";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { UpdateProduct } from "./Components/Product/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Cart from "./Pages/Cart/Cart";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Login } from "./Components/Login/Login";
import { SignIn } from "./Components/SignIn/SignIn";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import LayoutUser from "./Components/User/Dashboard/LayoutUser";
import Layout from "./Components/Admin/Dashboard/Layout";
import UserSettings from "./Components/User/UserSettings";
import UserFavs from "./Components/User/UserFavs";
import AdminProducts from "./Components/Admin/AdminProducts";
import AdminCategories from "./Components/Admin/AdminCategories";
import AdminOrders from "./Components/Admin/AdminOrders";
import AdminUsers from "./Components/Admin/AdminUsers";
import AdminSettings from "./Components/Admin/AdminSettings";
import AdminBrands from "./Components/Admin/AdminBrands";
import UpdateCategory from "./Components/Updates/UpdateCategory/UpdateCategory";
import UpdateBrand from "./Components/Updates/UpdateBrand/UpdateBrand";



function App() {
  
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/user/" element={<LayoutUser />}>
          <Route path="favorites" element={<UserFavs />} />
          <Route path="orders" element={"Pendiente"} />
          <Route path="reviews" element={"Pendiente"} />
          <Route path="settings" element={<UserSettings />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/admin/" element={<Layout />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/update/:id" element={<UpdateProduct />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="brands" element={<AdminBrands />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
