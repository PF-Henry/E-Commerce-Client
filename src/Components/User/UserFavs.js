import React from "react";
import { FaHeart } from "react-icons/fa";
import AdminNavBar from "../Admin/AdminNavBar";
import UserSideBar from "./UserSideBar";
import './UserStyles.css';


const UserFavs = () => {
    return (
        <div className="userContainer">
            <div className="sideBar animate__animated animate__fadeInLeft">
                <UserSideBar />
            </div>
            <AdminNavBar />

            <div className="userDashboard">
                <div className="row d-flex justify-content-center mb-2 userPruchasesContainer">

                <div className="container row d-flex justify-content-center mb-2 userContainer">
                    <div className="userCart">
                        <h5 className="userMyFav">
                            <FaHeart size={"1.8rem"} className="userCartIcon"/>
                            My favs
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

        </div>
    )
}

export default UserFavs;