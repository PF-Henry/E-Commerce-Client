import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync, updateUserAdminAsync } from "../../Redux/productSlice";
import './AdminDashboard.css'

const AdminSettings = () => {
  const allUsers = useSelector((state) => state.products.usersLoaded)
  const userId = useSelector((state) => state.products.userId)
  const userInfo = allUsers.filter(user => user.id === userId)
  const [userName] = userInfo.map(e => e.first_name)
  const [userMail] = userInfo.map(e => e.email)
  const [userLastName] = userInfo.map(e => e.last_name)
  const [userPhone] = userInfo.map(e => e.cellphone)

  const inputStateInitial = {
    name: userName,
    lastName: userLastName,
    phoneNum: userPhone? userPhone : '',
    email: userMail? userMail : '',
    //password: ''
  };

  const [input, setInput] = useState(inputStateInitial);
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsersAsync());
    }
  });

  let regexString = /^[A-Za-z]+$/;

  const validate = (input) => {
    let errors = {};
    if (!input.name || !input.name.match(regexString)) errors.name = 'Enter a valid name';
    if (!input.lastName || !input.lastName.match(regexString)) errors.lastName = 'Enter a valid last name';
    if (!input.email) errors.email = 'Enter an email';
    return errors;
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    console.log(input.lastName)
    setErrors(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAdminAsync(userId, input))
    console.log('User updated successfully')
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
              <span className="font-weight-bold">{userName + ' ' + userLastName}</span>
              <span className="text-black-50">{userMail}</span>
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
                    value={input.name}
                    name='name'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="text-justify labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={input.lastName}
                    placeholder="Last Name"
                    name='lastName'
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
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control"
                  placeholder="123-456-7890"
                  value={input.phoneNum}
                  name='phoneNum'
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="col-md-12">
                <label className="labels">email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@xample.com"
                  value={input.email}
                  name='email'
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="error">
                {errors.email && (
                    <p>{errors.email}</p>
                )}
              </div>

              <div className="row mt-3">
                <div className="col-md-12 passwordSetting">
                  <label className="labels">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    value=""
                    name='password'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <hr />
              </div>

              <div className="mt-5 text-center">
                { Object.keys(errors).length === 0 ? 
                  <button className="btn btn-primary profile-button" type="submit">
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

export default AdminSettings;