import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateForm from "./Components/CreateForm/CreateForm";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { UpdateProduct } from "./Components/UpdateProduct/UpdateProduct";
import Cart from "./Pages/Cart/Cart";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Login } from "./Components/Login/Login";
import { SignIn } from "./Components/SignIn/SignIn";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
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
