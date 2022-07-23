import React from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import OrdersTable from "../Tables/OrdersTable";
import './AdminDashboard.css'
import Searchbar from "../Searchbar/Searchbar";
import AdminNavBar from "./AdminNavBar";
import AdminSideBar from "./AdminSideBar";


const AdminOrders = () => {
    const allPendingOrders = [
        {name: '123Yoha', products: ['TV', 'PC'], total: 152},
        {name: '123Richy', products: ['TV', 'PC'], total: 152},
        {name: '132Victor', products: ['TV', 'PC'], total: 152},
        {name: '123Gerardo', products: ['TV', 'PC'], total: 152},
        {name: '123Sneider', products: ['TV', 'PC'], total: 152},
        {name: '132Gustavo', products: ['TV', 'PC'], total: 152}
    ]

    return (
        <div className="adminContainer">
            <AdminNavBar />
            <AdminSideBar />

            <div className="adminDashboard adminOrders">
                <div className="mb-2 mx-auto mb-lg-0 d-flex justify-content-center searchAdmin">
                    <Searchbar content={'ID'}/>
                </div>
                <div className="d-flex justify-content-evenly flex-wrap">
                    <OrdersTable
                        orders={allPendingOrders}
                    />
                </div>
            </div>
        </div> 
        
    )
}

export default AdminOrders;