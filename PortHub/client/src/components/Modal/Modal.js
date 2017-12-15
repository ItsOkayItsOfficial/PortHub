import React from 'react';
import './Modal.css';
import Aux from '../../HOCs/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, closeModal, selectedTemplate, id, children, className, title}) => (
  selectedTemplate===id ?
  <Aux>
    <Backdrop show={show} clicked={closeModal} />
    <div 
      className={className ? "Modal " + className : 'Modal'}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
    {/* <div classaName="modal-header">
        <h5 classaName="modal-title">{title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div> */}
      {children}
    </div>
  </Aux>
  : null
)

export default modal;