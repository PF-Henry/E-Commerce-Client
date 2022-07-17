import React from "react";
import { FaShoppingCart, FaTruck, FaHistory } from "react-icons/fa";
import './UserStyles.css';


const UserPurchases = () => {
    return (
        <div className="userDashboard">
            <div className="row d-flex justify-content-center mb-2 userPruchasesContainer">

                <div className="container row d-flex justify-content-center mb-2">
                    <div className="userCart">
                        <h5 className="userMyCart">
                            <FaShoppingCart size={"1.8rem"} className="userCartIcon"/>
                            My Cart
                        </h5>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 1</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container row d-flex justify-content-center mb-2 userContainer">
                    <div className="userCart">
                        <h5 className="userMyFav">
                            <FaTruck size={"1.8rem"} className="userCartIcon"/>
                            To be received
                        </h5>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 1</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container row d-flex justify-content-center mb-2 userContainer">
                    <div className="userCart">
                        <h5 className="userMyFav">
                            <FaHistory size={"1.8rem"} className="userCartIcon"/>
                            My purchase history
                        </h5>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 1</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body cardBody">
                                <div className="cardContent">
                                    <h5 className="card-title cardTitleH5">Item 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPurchases;