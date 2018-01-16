import React from 'react';
import './SidebarToggle.css';

const SidebarToggle = ({ clicked }) => {
  return (
      <div className='SidebarToggle' onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default SidebarToggle;