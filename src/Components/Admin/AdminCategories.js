import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getCategoriesAsync } from "../../Redux/productSlice";
import './AdminDashboard.css'
import AdminNavBar from "./AdminNavBar";
import AdminSideBar from "./AdminSideBar";


const AdminCategories = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.products.categoriesLoaded);

    useEffect(() => {
        if (!allCategories.length) {
        dispatch(getCategoriesAsync());
        }
    }, [allCategories, dispatch]);

    return ( 
        <div className="adminContainer">
            <AdminNavBar />
            <AdminSideBar />
            <div className="adminDashboard adminProducts">
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <Searchbar content='Category'/>
                    <NavLink
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        to="/CreateCategory"
                    >
                        New Category
                    </NavLink>
                </div>
                
                <div className="d-flex justify-content-evenly flex-wrap">
                    <Products_CategoriesTable
                        products={allCategories}
                        name={'Categories'}
                        ruta={"/UpdateCategory/"}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default AdminCategories;