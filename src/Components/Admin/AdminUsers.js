import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UsersTable from "../Tables/UsersTable";
import Searchbar from "../Searchbar/Searchbar";
import './AdminDashboard.css'


const AdminUsers = () => {
    const allUsers = [
        {username: 'Yoha', id: 1, type: 'admin'},
        {username: 'Richy', id: 2, type: 'user'},
        {username: 'Victor', id: 3, type: 'admin'},
        {username: 'Gerardo', id: 4, type: 'user'},
        {username: 'Sneider', id: 5, type: 'admin'},
        {username: 'Gustavo', id: 6, type: 'user'}
    ]

    return ( 
        <div className="adminDashboard adminOrders">

            <div className="mb-2 mx-auto mb-lg-0 d-flex justify-content-center searchAdmin">
                <Searchbar content={'ID or Username'}/>
            </div>
            
            <div className="d-flex justify-content-evenly flex-wrap">
                <UsersTable
                    users={allUsers}
                />
            </div>
        </div>
    )
}

export default AdminUsers;