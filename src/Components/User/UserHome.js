import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";

const UserHome = () => {
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
                                <h5 className="card-title cardTitleH5">Total Pending Orders</h5>
                                <p className="card-text"> 2 items <br/>$13050</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-3">
                    <div className="card adminCard">
                        <div className="card-body cardBody">
                            <div className="cardIconRevenue">
                                <FcPaid size={"3rem"} />
                            </div>
                            <div className="cardContent">
                                <h5 className="card-title cardTitleH5">Last Orders</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card adminCard">
                        <div className="card-body cardBody">
                            <div className="cardIconOrders">
                                <FcTodoList size={"3rem"} />
                            </div>
                            <div className="cardContent">
                                <h5 className="card-title cardTitleH5">28</h5>
                                <p className="card-text">Pending Orders</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default UserHome;