import React from "react";
import AdminNavBar from "../Admin/AdminNavBar";
import UserSideBar from "./UserSideBar";
import './UserStyles.css'


const UserSettings = () => {
    return (
        <div className="userContainer">
            <div className="sideBar animate__animated animate__fadeInLeft">
                <UserSideBar />
            </div>
            
            <div class="container rounded bg-white mt-5 mb-5 userSettingsContainer">
                <AdminNavBar />
                
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8f7VOnz8lNzJYkzplysK2YOloLjzJoT8LA&usqp=CAU" alt="" />
                            <span class="font-weight-bold">Yoha</span>
                            <span class="text-black-50">mymail@mail.com</span><span> </span>
                        </div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label class="labels">Name</label>
                                    <input type="text" class="form-control" placeholder="first name" value=""/>
                                </div>

                                <div class="col-md-6">
                                    <label class="labels">Last Name</label>
                                    <input type="text" class="form-control" value="" placeholder="surname" />
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12 passwordSetting">
                                    <label class="labels">Password</label>
                                    <input type="text" class="form-control" placeholder="enter your new password" value="" />
                                </div>
                                <hr/>
                                <div class="d-flex justify-content-between align-items-center mb-3 deliveryInfo">
                                    <h4 class="text-right">Update Delivery Information</h4>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Mobile Number</label>
                                    <input type="text" class="form-control" placeholder="enter phone number" value="" />
                                </div>
                                <br/>
                                <div class="col-md-12">
                                    <label class="labels">Address Line 1</label>
                                    <input type="text" class="form-control" placeholder="enter address line 1" value="" />
                                </div>
                                <br/>
                                <div class="col-md-12">
                                    <label class="labels">Address Line 2</label>
                                    <input type="text" class="form-control" placeholder="enter address line 2" value="" />
                                </div>
                                <br/>
                                <div class="col-md-12">
                                    <label class="labels">Postcode</label>
                                    <input type="text" class="form-control" placeholder="enter address line 2" value="" />
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <label class="labels">Country</label>
                                    <input type="text" class="form-control" placeholder="country" value="" />
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">State/Region</label>
                                    <input type="text" class="form-control" value="" placeholder="state" />
                                </div>
                            </div>
                            
                            <div class="mt-5 text-center">
                                <button class="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default UserSettings;