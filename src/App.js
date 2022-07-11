import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateForm from "./Components/CreateForm/CreateForm";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product_detail/:id" element={<ProductDetail/>} />
        <Route path="/CreateProduct" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
