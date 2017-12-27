import React from 'react';
import './Modal.css';
import Aux from '../../HOCs/Aux';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

const modal = ({ show, closeModal, selectedTemplate, id, children, className, title, type}) => (
  selectedTemplate===id ?
  <Aux>
    <Backdrop show={show} clicked={closeModal} />
    <div 
      className={className ? "Modal " + className : 'Modal'}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        right: type==='resume' || 'site' ? '5%' : 0
      }}>
    <div className="modalHeader d-flex justify-content-center">
      <div className="modalTitle">
        <p className='align-self-center'>{title}</p>
      </div>
      <div className='ml-auto'>
        { type==='templateSelect' ?
          <Link to='inputPage' className="btn btn-success mr-4 btn-sm" title={title}> 
            Select
          </Link> : ''}        
          <a onClick={closeModal} className="btn btn-danger">
              <i className="fa fa-times"></i>          
          </a>
      </div>
    </div>
      {children}
    </div>
  </Aux>
  : null
)

export default modal;