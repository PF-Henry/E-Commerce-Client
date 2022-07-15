import React from 'react';
import './Login.css';
import Google from './images/google.png';
import Facebook from "./images/facebook.png";
import Github from "./images/github.png";
import { SiHexo } from 'react-icons/si';
import { Link } from 'react-router-dom';


export const Login = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };

      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };

  return (
    <div>
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Choose a Login Method</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">


                    <div className="right">
                        <input type="text" placeholder="Username" className='right-input'/>
                        <input type="text" placeholder="Password" className='right-input'/>
                        <button className="btnLogin">Login</button>
                    </div>
                    
                    <div className="center">
                        <div className="or">OR</div>
                    </div>

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
                </div>
                <div className="modal-footer">
                    <div className="basis">
                        <Link
                            to="/"
                            className="text-white d-flex align-items-center letter-spacing"
                        >
                            <SiHexo fontSize={"2.3rem"} />
                            <div className="fs-4 pb-1">exa</div>
                            <div className="fw-bold text-aqua fs-4 pb-1">tech</div>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-x" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>  

    </div>
  )
}
