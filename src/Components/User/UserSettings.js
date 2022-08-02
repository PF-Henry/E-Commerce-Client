import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAsync } from "../../Redux/productSlice";


const UserSettings = () => {
  const user = useSelector((state) => state.products.userSession)

  const dispatch = useDispatch()

  const inputStateInitial = {
    first_name: user.first_name,
    last_name: user.last_name,
    cellphone: user.cellphone? user.cellphone : 0,
    email: user.email? user.email : '',
    address: user.address? user.address : '',
    zip_code: user.zip_code? user.zip_code : '',
    department: user.department? user.department : '',
    password: '',
  };

  const [input, setInput] = useState(inputStateInitial);
  const [errors, setErrors] = useState({})

  let regexString = /^[A-Za-z]+$/;

  const validate = (input) => {
    let errors = {};
    if (!input.first_name || !input.first_name.match(regexString)) errors.first_name = 'Enter a valid name';
    if (!input.last_name || !input.last_name.match(regexString)) errors.last_name = 'Enter a valid last name';
    if (input.password && input.password.length < 6) errors.password = 'Password must have at least 6 digits'
    return errors;
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync(user.id, input))
    console.log('User updated successfully')
    console.log(input)
  }

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
              <span className="font-weight-bold">{user.first_name + ' ' + user.last_name}</span>
              <span className="text-black-50">{user.email}</span>
              <span> </span>
            </div>
          </div>

          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={input.first_name}
                    name='first_name'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="text-justify labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={input.last_name}
                    placeholder="Last Name"
                    name='last_name'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="error">
                {errors.name? (
                    <p>{errors.name}</p>
                ) : null}
              </div>
              <div className="error">
                {errors.lastName? (
                    <p>{errors.lastName}</p>
                ) : null}
              </div>

              <div className="col-md-12">
                <label className="labels col-lg-offset-2">Cellphone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="123-456-7890"
                  value={input.cellphone}
                  name='cellphone'
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="col-md-12">
                <label className="labels">email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  name='email'
                  disabled
                />
              </div>

              <div className="row mt-3">
                <div className="col-md-12 passwordSetting">
                  <label className="labels">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    value={input.password}
                    name='password'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="error">
                  {errors.password? (
                      <p>{errors.password}</p>
                  ) : null}
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
                    value={input.address}
                    name='address'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <br />
                <div className="col-md-12">
                  <label className="labels">Zip code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip Code"
                    value={input.zip_code}
                    name='zip_code'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <label className="labels">Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department"
                  value={input.department}
                  name='department'
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="mt-5 text-center">
                { Object.keys(errors).length === 0 ? 
                  <button className="btn btn-primary profile-button" type="submit" >
                    Save Profile
                  </button> :
                  <button className="btn btn-primary profile-button" type="submit" disabled>
                    Save Profile
                  </button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserSettings;