import React from 'react';
import './Modal.css';
import Aux from '../Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, closeModal, selectedTemplate, id, children, className, title, type, zIndex }) => {
  const continueAsGuestStyle = {
    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: show ? '1' : '0',
    width: '60vw',
    height: '60vh',
    right: '20%',
    top: '10%',
    zIndex: 5000
  }
  return (
  selectedTemplate===id || className==='continueAsGuest' ?
  <Aux>
    <Backdrop show={show} clicked={closeModal} className={className} />
    <div 
      className={className ? "Modal " + className : 'Modal'}
      style={className==='continueAsGuest' ? continueAsGuestStyle : 
      {
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        right: type==='resume' || 'site' ? '5%' : '0',
      }}>
      {children}
    </div>
  </Aux>
  : null
  )
}
export default modal;


