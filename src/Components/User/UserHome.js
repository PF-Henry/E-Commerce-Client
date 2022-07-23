import React from "react";
import { useSelector } from "react-redux";
import { FaRegSmileBeam } from "react-icons/fa";

const UserHome = () => {
    const cartItems = useSelector((state) => state.products.cartItems);
    let quantities = cartItems.reduce((total, obj) => obj.quantity + total, 0);
    let subtotal = cartItems.reduce(
        (total, obj) => obj.quantity * obj.price + total,
        0
    );

    return (
        <div>
            <div className="adminDashboard">
                <div className="d-flex justify-content-center mb-2">
                    <h2 className="admin_H2 letter-spacing d-flex align-items-center gap-2">
                        Hello, User
                        <FaRegSmileBeam size={"2.2rem"} />
                    </h2>
                </div>
            </div>

            <div className="row adminCardsContainer d-flex justify-content-center mb-2">

                <div className="col-md-3">
                    <div className="card adminCard">
                        <div className="card-body cardBody">
                            <div className="cardContent">
                                <h5 className="card-title cardTitleH5">In My Cart</h5>
                                <p className="card-text"> {quantities} {quantities > 1 ? "items" : "item"} 
                                    <br/>$ {subtotal}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default UserHome;