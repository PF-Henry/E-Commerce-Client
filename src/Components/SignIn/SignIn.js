import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiHexo } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerUserAsync,
  resetError,
  loginGoogleAsync,
  registerGoogleAsync,
  resetMsg,
} from "../../Redux/productSlice";
import apiUrl from "../../Constants/apiUrl";

export const SignIn = () => {
  const navigate = useNavigate();
  const error = useSelector((state) => state.products.error);
  const message = useSelector((state) => state.products.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registerGoogleAsync()); //*
    dispatch(loginGoogleAsync);
    return () => {
      dispatch(resetError());
      dispatch(resetMsg());
    };
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }, [message, navigate]);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const google = () => {
    window.open(`${apiUrl}auth/google/callback`, "_self");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user)
    dispatch(registerUserAsync(user));
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="padding-container">
      {error && (
        <div className="message-container--login alert alert-danger">
          <p>{error}</p>
        </div>
      )}
      {message && (
        <div className="message-container--login alert alert-success ">
          <p>{message}</p>
        </div>
      )}
      <div className="login-container">
        <div className="section-title">
          <h5 className="section-title--title mt-3">Register</h5>
          <div className="section-title-text">
            <p className="m-0">Already have account?</p>
            <NavLink to="/auth/login"> Login </NavLink>
          </div>
        </div>

        <div className="section-options">
          <div className="div-social-buttons">
            <div>
              <FcGoogle size={"5rem"} />
            </div>
            <div
              className="loginButton google d-flex align-items-center gap-2"
              onClick={google}
            >
              <FaGoogle size={"1.2rem"} />
              Google
            </div>
          </div>

          <div className="right">
            <form className="register-inputs" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Name"
                className="form-control py-0"
                name="first_name"
                value={user.name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="form-control py-0"
                name="last_name"
                value={user.last_name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control py-0"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control py-0"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit" className="btnLogin">
                Register
              </button>
            </form>
          </div>
        </div>

        <div className="logo-footer-container">
          <NavLink
            to="/"
            className="navbar-brand text-white d-flex align-items-center letter-spacing"
          >
            <SiHexo fontSize={"2.3rem"} />
            <div className="fs-4 pb-1">exa</div>
            <div className="fw-bold text-aqua fs-4 pb-1">tech</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
