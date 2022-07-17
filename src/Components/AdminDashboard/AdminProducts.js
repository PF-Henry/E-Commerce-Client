import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import {
    getAllDBProductsAsync,
    getCategoriesAsync,
  } from "../../Redux/productSlice";
import './AdminDashboard.css'


const AdminProducts = ({ caso }) => {
    const dispatch = useDispatch();
    const allDBProducts = useSelector((state) => state.products.allDBProducts);
    const allCategories = useSelector((state) => state.products.categoriesLoaded);
    
    useEffect(() => {
        if (!allDBProducts.length) {
        dispatch(getAllDBProductsAsync());
        }
    }, [allDBProducts, dispatch]);

    useEffect(() => {
        if (!allCategories.length) {
        dispatch(getCategoriesAsync());
        }
    }, [allCategories, dispatch]);

    return ( 
        <div className="adminDashboard adminProducts">
            <div className="d-flex justify-content-center gap-3 mb-3">
                <NavLink
                    className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                    to="/CreateProduct"
                >
                    New {caso === 'Products' ? 'Product' : 'Category'}
                </NavLink>
            </div>
            
            <div className="d-flex justify-content-evenly flex-wrap">
                <Products_CategoriesTable
                    products={allDBProducts}
                    categories={allCategories}
                    name={caso}
                    ruta={"/UpdateProduct/"}
                />
            </div>
        </div>
    )
}

export default AdminProducts;