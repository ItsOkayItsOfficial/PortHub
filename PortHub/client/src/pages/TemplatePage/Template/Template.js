import React from 'react';
import Modal from '../../../components/Modal/Modal';
import DetailedTemplate from './DetailedTemplate/DetailedTemplate';
import Aux from '../../../HOCs/Aux';
import './Template.css';

const Template = ({ img, src, type, title, showModal, closeModal, viewTemplate, selectedTemplate }) => {
  return (
    <Aux>
      <Modal selectedTemplate={selectedTemplate.title} id={title} show={showModal} closeModal={closeModal} className='detailModal' title={title} type='templateSelect'>
        <DetailedTemplate
          img={img}
          src={src}
          type = {type}
          title={title} />
      </Modal>
      <button onClick={() => viewTemplate(title, type)} >
          <div className="card m-4 " style={{width: "25vw"}}>
            <img className="card-img-top" src={img} alt={title}/>
            <div className="card-footer d-flex flex-column">
              <p className="card-title text-center">{title}</p>

            </div>
          </div>
      </button>
    </Aux>
  )

}



export default Template;