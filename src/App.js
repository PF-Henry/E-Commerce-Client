import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { CreateProduct } from "./Components/Product/CreateProduct";
import { UpdateProduct } from "./Components/Product/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Cart from "./Pages/Cart/Cart";
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
import { useSelector } from "react-redux";
import { PublicRoutes } from "./Routes/PublicRoutes";
import { AuthRouter } from "./Routes/AuthRouter";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { AppRouter } from "./Routes/AppRouter";
import { AdminRouter } from "./Routes/AdminRouter";
import { AdminRoutes } from "./Routes/AdminRoutes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Administramos rutas publicas */}
        <Route
          // Con el path indicamos que esas rutas van a empezar con /auth/
          path="/auth/*"
          // En element le pasamos el componente
          element={
            <PublicRoutes>
              <AuthRouter />
            </PublicRoutes>
          }
        />

        {/* Administramos rutas privadas */}
        <Route
          // Con el path indicamos que esas rutas van a empezar con /auth/
          path="/app/*"
          // En element le pasamos el componente
          element={
            <PrivateRoutes>
              <AppRouter />
            </PrivateRoutes>
          }
        />

        {/* Administramos rutas de admin */}
        <Route
          // Con el path indicamos que esas rutas van a empezar con /auth/
          path="/admin/*"
          // En element le pasamos el componente
          element={
            <AdminRoutes>
              <AdminRouter />
            </AdminRoutes>
          }
        />

        {/* <Route path="/user/" element={<LayoutUser />}>
            <Route path="favorites" element={<UserFavs />} />
            <Route path="orders" element={"Pendiente"} />
            <Route path="reviews" element={"Pendiente"} />
            <Route path="settings" element={<UserSettings />} />
          </Route> */}

        {/* <Route path="/admin/" element={<Layout />}>
            <Route path="products" element={<AdminProducts />} />
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="products/update/:id" element={<UpdateProduct />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="brands" element={<AdminBrands />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route> */}
      </Routes>
    </div>
  );
}

export default App;
