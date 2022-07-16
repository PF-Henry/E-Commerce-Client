import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateForm from "./Components/CreateForm/CreateForm";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { UpdateProduct } from "./Components/UpdateProduct/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Cart from "./Pages/Cart/Cart";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/CreateProduct" element={<CreateForm />} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
