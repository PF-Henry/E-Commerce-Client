import React from "react";
import Cart from "../../Pages/Cart/Cart";
import './UserStyles.css';


const UserCart = () => {
    return (
        <div className="userDashboard">
            <div className="row d-flex justify-content-center mb-2">
                <Cart />
            </div>
        </div>
    )
}

export default UserCart;