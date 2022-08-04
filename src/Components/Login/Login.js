import React, { useEffect, useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { SiHexo } from "react-icons/si";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserAsync,
  registerGoogleAsync,
  resetError,
  resetMsg,
  recoverPasswordAsync,
} from "../../Redux/productSlice";

import apiUrl from "../../Constants/apiUrl";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.products.role);
  const error = useSelector((state) => state.products.error);
  const message = useSelector((state) => state.products.msg);

  useEffect(() => {
    dispatch(registerGoogleAsync());
    return () => {
      dispatch(resetError());
      dispatch(resetMsg());
    };
  }, [dispatch]);

  useEffect(
    () => {
      if (role === "User" || role === "Admin") {
        navigate("/");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [role]
  );

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const google = () => {
    window.open(`${apiUrl}auth/google/signin`, "_self");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(loginUserAsync(user));
    setUser({
      email: "",
      password: "",
    });
  };

  const handleChangeRecoveredPassword = (e) => {
    setUserEmail({
      ...userEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault(e);
    dispatch(recoverPasswordAsync(userEmail));
    setUserEmail({
      email: "",
    });
  };

  return (
    <div className="padding-container--login padding-container">
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-light">
              <h5
                className="modal-title modal-title2"
                id="exampleModalLongTitle"
              >
                Recover Password
              </h5>
              <button
                type="button"
                className="close close2"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-body2">
              <p className="mb-1">Enter your email:</p>
              <form
                id="formRecoverPassword"
                className="d-flex justify-content-center"
              >
                <input
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={userEmail.email}
                  onChange={(e) => handleChangeRecoveredPassword(e)}
                  className="form-control"
                />
              </form>
            </div>
            <div className="modal-footer modal-footer2">
              <NavLink
                to="/"
                className="navbar-brand text-white d-flex align-items-center letter-spacing"
              >
                <SiHexo fontSize={"2.3rem"} />
                <div className="fs-4 pb-1">exa</div>
                <div className="fw-bold text-aqua fs-4 pb-1">tech</div>
              </NavLink>
              <button
                onClick={(e) => handleRecoverPassword(e)}
                type="submit"
                className="btn btn-aqua"
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {error ? (
        <div className="message-container--login error ">
          <p>{error}</p>
        </div>
      ) : (
        <div className="message-container--login disable ">
          <p></p>
        </div>
      )}

      {message ? (
        <div className="message-container--login success ">
          <p>{message}</p>
        </div>
      ) : (
        <div className="message-container--login disable ">
          <p></p>
        </div>
      )}
      <div className="login-container--login">
        <div className="section-title--login">
          <h5 className="section-title--title--login mt-3">
            Choose a Login Method
          </h5>
          <div className="section-title-text--login">
            <p className="m-0">Don't have account yet?</p>
            <NavLink to="/auth/register"> Register </NavLink>
          </div>
        </div>

        <div className="section-options--login">
          <div className="div-social-buttons--login">
            <div>
              <FcGoogle size={"5rem"} />
            </div>
            <div
              className="loginButton--login google d-flex align-items-center gap-2"
              onClick={google}
            >
              <FaGoogle size={"1.2rem"} />
              Google
            </div>
          </div>

          <div className="right--login">
            <form
              className="right-inputs--login"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="d-flex flex-column gap-3 mb-1">
                <div className="input-group">
                  <span
                    className="input-group-text bg-purple-dark text-white"
                    id="basic-addon1"
                  >
                    <FiMail size={"1.2rem"} />
                  </span>
                  <input
                    type="text"
                    placeholder="name@example.com"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group">
                  <span
                    className="input-group-text bg-purple-dark text-white"
                    id="basic-addon1"
                  >
                    <FiLock size={"1.2rem"} />
                  </span>
                  <input
                    type="password"
                    placeholder="**********"
                    className="form-control"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}
              <div className="div_modal">
                <p
                  className="p_Modal"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  {" "}
                  Forgot Password?{" "}
                </p>
              </div>
              <button
                className="btn bg-purple-dark text-white border-0 addToCartBtn mt-2"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="logo-footer-container--login">
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
      {/* END  LOGIN CONTAINER*/}
    </div>
  );
};
