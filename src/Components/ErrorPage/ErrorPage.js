import React from 'react';
import { useNavigate } from "react-router-dom";
import './ErrorPage.css';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='error-container'>
        <div className='error-container-img'>
     
              <button  onClick={() => navigate(-1)} className='error-container-btn'>Back</button>

        </div>
    </div>
  )
}
