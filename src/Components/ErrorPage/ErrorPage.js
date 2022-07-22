import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
  return (
    <div className='error-container'>
        <div className='error-container-img'>
            <Link to='/'>
                <button className='error-container-btn'>Back Home</button>
            </Link>
        </div>
    </div>
  )
}
