import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../../Redux/productSlice";

const AdminSettings = () => {
  const allUsers = useSelector((state) => state.products.usersLoaded)
  const userId = useSelector((state) => state.products.roleId)
  const userInfo = allUsers.filter(user => user.id === userId)
  const [userName] = userInfo.map(e => e.first_name)
  const [userMail] = userInfo.map(e => e.email)
  const [userLastName] = userInfo.map(e => e.last_name)
  const [userAdress] = userInfo.map(e => e.address)
  const [userPhone] = userInfo.map(e => e.cellphone)
  const [userZipCode] = userInfo.map(e => e.zip_code)
  const [userDeparment] = userInfo.map(e => e.department)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsersAsync());
    }
  });

  return (
    <div className="userContainer">
      <div className="container rounded bg-white mt-5 mb-5 userSettingsContainer">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8f7VOnz8lNzJYkzplysK2YOloLjzJoT8LA&usqp=CAU"
                alt=""
              />
              <span className="font-weight-bold">{userName}</span>
              <span className="text-black-50">{userMail}</span>
              <span> </span>
            </div>
          </div>

          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={userName}
                  />
                </div>

                <div className="col-md-6">
                  <label className="text-justify labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userLastName}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  value={userPhone? userPhone : ''}
                />
              </div>

              <div className="col-md-12">
                <label className="labels">email address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email@xample.com"
                  value={userMail? userMail : ''}
                />
              </div>

              <div className="row mt-3">
                <div className="col-md-12 passwordSetting">
                  <label className="labels">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    value=""
                  />
                </div>
                <hr />

                <div className="d-flex justify-content-between align-items-center mb-3 deliveryInfo">
                  <h4 className="text-right">Update Delivery Information</h4>
                </div>
                
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={userAdress? userAdress : ''}
                  />
                </div>
                <br />
                <div className="col-md-12">
                  <label className="labels">Zip code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip Code"
                    value={userZipCode? userZipCode : ''}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <label className="labels">Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department"
                  value={userDeparment? userDeparment : ''}
                />
              </div>

              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
