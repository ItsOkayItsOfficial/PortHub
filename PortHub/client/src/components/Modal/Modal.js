import React from 'react';
import './Modal.css';
import Aux from '../../HOCs/Aux';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

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
    <div className="modal-header">
      <div className="modal-title">
        <p>{title} theme</p>
      </div>
      <div>
          <Link to='inputPage'> 
            <button className="btn btn-primary mr-4">Select</button>
          </Link>        
          <button type="button" onClick={closeModal} className="btn-danger">
              <i className="fa fa-times"></i>          
          </button>

      </div>
    </div>
      {children}
    </div>
  </Aux>
  : null
)

export default modal;