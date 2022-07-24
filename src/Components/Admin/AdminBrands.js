import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getBrandsAsync } from "../../Redux/productSlice";
import './AdminDashboard.css'


const AdminBrands = () => {
    const dispatch = useDispatch();
    const allBrands = useSelector((state) => state.products.brandsLoaded);

    useEffect(() => {
        if (!allBrands.length) {
        dispatch(getBrandsAsync());
        }
    }, [allBrands, dispatch]);

    return ( 
        <div className="adminContainer">
            <div className="adminDashboard adminProducts">
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <Searchbar content='Brand'/>
                    <NavLink
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        to="/CreateBrand"
                    >
                        New Brand
                    </NavLink>
                </div>
                
                <div className="d-flex justify-content-evenly flex-wrap">
                    <Products_CategoriesTable
                        products={allBrands}
                        name={'Brands'}
                        ruta={"/UpdateBrand/"}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default AdminBrands;