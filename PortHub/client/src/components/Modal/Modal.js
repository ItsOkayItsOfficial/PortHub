import React from 'react';
import './Modal.css';
import Aux from '../../HOCs/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, closeModal, selectedTemplate, id, children}) => (
  selectedTemplate===id ?
  <Aux>
    <Backdrop show={show} clicked={closeModal} />
    <div 
      className='Modal'
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
      {children}
    </div>
  </Aux>
  : null
)

export default modal;