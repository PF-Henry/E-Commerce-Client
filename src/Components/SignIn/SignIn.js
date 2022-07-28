import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiHexo } from "react-icons/si";
import Google from '../Login/images/google.png';
import Facebook from "../Login/images/facebook.png";
import Github from "../Login/images/github.png";
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerGoogleAsync, registerUserAsync, resetError, loginGoogleAsync, resetMsg } from "../../Redux/productSlice";
import apiUrl from '../../Constants/apiUrl';

export const SignIn = () => {
    const navigate = useNavigate();
    const error = useSelector(state => state.products.error);
    const message = useSelector(state => state.products.msg);
    const dispatch = useDispatch();
    // console.log('Error in Register', error);


    

    useEffect(() => {
        console.log('Dispatch registerUserAsync - SignIn Form');
        dispatch(loginGoogleAsync);
        return () => { 
            dispatch(resetError());
            dispatch(resetMsg())
        }
    }
    , [dispatch])

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                navigate('/login');
            }, 3000);
            
        }
    }
    , [message, navigate])

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });


    const google = () => {
        window.open(`${apiUrl}auth/google/callback`, "_self");
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
        // console.log(user)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user)
        dispatch(registerUserAsync(user))
        setUser({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        })
       
      }



  return (
      
    <div className='padding-container'>
        {error ?
            <div className='message-container--login error '>
                <p>{error}</p>
            </div>
        :
            null
        }
        {message ?
            <div className='message-container--login success '>
                <p>{message}</p>
            </div>
        :
           null
        }
        <div className="login-container">
            <div className='section-title'>
                <h5 className="section-title--title" >Register</h5>
                <div className='section-title-text'> 
                    <p className='m-0'>Already have account?</p>
                    <NavLink to='/auth/login' > Login </NavLink>
                </div>
            </div>

            <div className='section-options'>
                <div className='div-social-buttons'>
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>

               
                <div className="right">
                      <form className='register-inputs' onSubmit={ e => handleSubmit(e)}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className='right-input' 
                            name='first_name' 
                            value={user.name} 
                            onChange={e => handleChange(e)} 
                            />
                        <input 
                            type="text" 
                            placeholder="Lastname" 
                            className='right-input'
                            name='last_name'
                            value={user.lastName}
                            onChange={e => handleChange(e)}
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className='right-input'
                            name='email'
                            value={user.email}
                            onChange={e => handleChange(e)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className='right-input'
                            name='password'
                            value={user.password}
                            onChange={e => handleChange(e)}
                        />
                        <button type='submit' className="btnLogin">Register</button>
                      </form>
                </div>
            </div>


            <div className='logo-footer-container'>

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



  )
 }
