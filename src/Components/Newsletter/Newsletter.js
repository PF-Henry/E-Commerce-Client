import React from 'react';
import './Newsletter.css'



export const Newsletter = () => {

  return (
    <div className="subscription">
        <p>Subscribe to our newsletter!</p>
        <form>
          <input
          className='subs-input'
          type='email'
          placeholder='Your mail...'
          />
          <button className="subs-button" type='submit'>SUBSCRIBE</button>
        </form> 
      </div>
  )
}
