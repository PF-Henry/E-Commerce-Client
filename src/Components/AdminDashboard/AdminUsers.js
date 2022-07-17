import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UsersTable from "../Tables/UsersTable";
import './AdminDashboard.css'


const AdminUsers = ({ caso }) => {
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
            
            <div className="d-flex justify-content-evenly flex-wrap">
                <UsersTable
                    users={allUsers}
                />
            </div>
        </div>
    )
}

export default AdminUsers;