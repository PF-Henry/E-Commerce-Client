import React, { useEffect, useState } from 'react';
import './Login.css';
import Google from './images/google.png';
import Facebook from "./images/facebook.png";
import Github from "./images/github.png";
import { NavLink } from 'react-router-dom';
import { SiHexo } from "react-icons/si";
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginGoogleAsync, loginUserAsync, registerGoogleAsync, resetError, resetMsg } from '../../Redux/productSlice';

import apiUrl from '../../Constants/apiUrl';

export const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state) => state.products.role);
    const error = useSelector((state) => state.products.error);
    const message = useSelector((state) => state.products.msg);
    console.log('Role in login', role);
    

    useEffect(() => {
        console.log('Dispatch registerUserAsync - Login Form');
        dispatch(registerGoogleAsync());
        // dispatch(loginGoogleAsync());
        return () => {
            dispatch(resetError());
            dispatch(resetMsg());
        }
    }
    , [dispatch])

    useEffect(() => {
        if (role === 'User') {
            console.log('Redirecting to Home');
                navigate('/');
            }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [role])
    

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const google = () => {
        window.open(`${apiUrl}auth/google/signin`, "_self");
      };

      const github = () => {
        window.open("http://localhost:3001/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };

      const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault(e);
        dispatch(loginUserAsync(user))
        setUser({
            email: '',
            password: '',
        })

      
    }

  return (
    <div className='padding-container--login'>
        {error ?
            <div className='message-container--login error '>
                <p>{error}</p>
            </div>
        :
            <div className='message-container--login disable '>
                <p></p>
            </div>
        }

        {message ?
            <div className='message-container--login success '>
                <p>{message}</p>
            </div>
        :
            <div className='message-container--login disable '>
                <p></p>
            </div>
        }
        <div className="login-container--login">
            <div className='section-title--login'>
                <h5 className="section-title--title--login" >Choose a Login Method</h5>
                <div className='section-title-text--login'> 
                    <p className='m-0'>Don't have account yet?</p>
                    <NavLink to='/auth/register' > Sign In </NavLink>
                </div>

            </div>

            <div className='section-options--login'>
                <div className='div-social-buttons--login'>
                    <div className="loginButton--login google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton--login facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton--login github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>

               
                <div className="right--login">
                    <form className='right-inputs--login' onSubmit={ e => handleSubmit(e)}>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Email" 
                                className='right-input--login'
                                name='email' 
                                value={user.email} 
                                onChange={e => handleChange(e)} 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className='right-input--login mt-2'
                                name='password' 
                                value={user.password} 
                                onChange={e => handleChange(e)} 
                            />
                        </div>
                        <button className="btnLogin--login" type='submit'>Login</button>
                    </form>
                </div>
            </div>

            <div className='logo-footer-container--login'>

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
  )
}
