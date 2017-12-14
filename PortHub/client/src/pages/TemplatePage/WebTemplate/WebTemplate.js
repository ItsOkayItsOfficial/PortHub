import React from 'react';
import Modal from '../../../components/Modal/Modal';
import DetailedTemplate from './DetailedTemplate/DetailedTemplate';
import Aux from '../../../HOCs/Aux';

const WebTemplate = ({ src,title, showModal, closeModal, viewTemplate, selectedTemplate }) => {
  return (  
    <Aux>
      <Modal selectedTemplate={selectedTemplate.title} id={title} show={showModal} closeModal={closeModal}>
        <DetailedTemplate
          src={src}
          title={title} />
      </Modal>
        <div className="card m-4 " style={{width: "25vw"}}>
          <iframe className="card-img-top" src={src} alt={title}/>
          <div className="card-footer d-flex flex-column">
            <p className="card-title text-center">{title}</p>
              <button className="btn btn-primary" 
                      onClick={() => viewTemplate(title)} 
                      style={{margin:"auto"}}>
                      Select </button> 
          </div>
        </div>
    </Aux>
  )
}



export default WebTemplate;