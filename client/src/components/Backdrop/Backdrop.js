import React from 'react';
import './Backdrop.css';

const backdrop = ({ show, className, clicked }) => (
  show ? <div
        style={{
        zIndex: className==='continueAsGuest' ? 5000 : 500,
      }} className='Backdrop' onClick={clicked}></div> : null
)

export default backdrop;