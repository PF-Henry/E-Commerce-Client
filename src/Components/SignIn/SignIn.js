import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiHexo } from "react-icons/si";
import Google from '../Login/images/google.png';
import Facebook from "../Login/images/facebook.png";
import Github from "../Login/images/github.png";
import './SignIn.css';

export const SignIn = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };

      const github = () => {
        window.open("http://localhost:3001/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };



  return (
      
    <div className='padding-container'>
        <div className="login-container">
            <div className='section-title'>
                <h5 className="section-title--title" >Register</h5>
                <div className='section-title-text'> 
                    <p className='m-0'>Already have account?</p>
                    <NavLink to='/Login' > Login </NavLink>
                </div>

            </div>

            {/* <div className='section-options'>
                <div className="right">
                      <form className='register-inputs'>
                        <input type="text" placeholder="Name" className='right-input'/>
                        <input type="text" placeholder="Lastname" className='right-input'/>
                        <input type="text" placeholder="Email" className='right-input'/>
                        <input type="text" placeholder="Password" className='right-input'/>
                        <button className="btnLogin">Login</button>
                      </form>
                </div>
            </div> */}

            <div className='section-options'>
                <div className='div-sotial-buttons'>
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
                      <form className='register-inputs'>
                        <input type="text" placeholder="Name" className='right-input'/>
                        <input type="text" placeholder="Lastname" className='right-input'/>
                        <input type="text" placeholder="Email" className='right-input'/>
                        <input type="text" placeholder="Password" className='right-input'/>
                        <button className="btnLogin">Login</button>
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
