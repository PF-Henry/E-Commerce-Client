import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products_CategoriesTable from "../Tables/ProductsTable";
import Searchbar from "../Searchbar/Searchbar";
import { getBrandsAsync, createBrandAsync } from "../../Redux/productSlice";
import './AdminDashboard.css'


const AdminBrands = () => {
    const dispatch = useDispatch();
    const allBrands = useSelector((state) => state.products.brandsLoaded);

    const [brand, setBrand] = useState({name : ''})

    function handleInputChange(e) {
        setBrand({
            name: e.target.value
        });
    }

    function onClickCreate(e) {
        dispatch(createBrandAsync(brand));
        alert('Brand created')
    }

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
                    <button
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        data-toggle="collapse"
                        href="#collapseExample"
                        aria-controls="multiCollapseExample1"
                    >
                        New Brand
                    </button>
                </div>

                <div class="collapse" id="collapseExample">
                    <div className="letter-spacing">
                        <form >
                            <div className="form-group">
                                <label htmlFor="name" className="formItem">
                                Name
                                </label>
                                <input
                                type="text"
                                onChange={handleInputChange}
                                className="form-control"
                                name="name"
                                value={brand.name}
                                placeholder="Name"
                                />
                            </div>
                            <div className="mb-5 d-flex justify-content-center mt-4">
                                <input
                                className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                                type="button"
                                value="Create Brand"
                                onClick={onClickCreate}
                                />
                            </div>
                        </form>
                    </div>
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