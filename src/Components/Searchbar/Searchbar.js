import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
  return (
    <div className='div--Serchbar'>
      <input className='input--SearchBar' placeholder='Search Product'/>
      <button className='btn--Searchbar'>SEARCH</button>
    </div>
  )
}

export default Searchbar
