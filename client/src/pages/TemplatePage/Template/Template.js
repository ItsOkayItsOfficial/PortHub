import React from 'react';
import Modal from '../../../components/Modal/Modal';
import DetailedTemplate from './DetailedTemplate/DetailedTemplate';
import Aux from '../../../components/Auxiliary/Auxiliary';
import './Template.css';

const Template = ({ img, src, type, title, showModal, closeModal, viewTemplate, selectedTemplate, inputs, guestContinueShow, isAuthenticated, dashboard, createdAt, dashboardTemplate }) => {
let dashboardList = '';

  if (dashboard && !dashboardTemplate.url) {
    dashboardList = [<li key={`firstListItem`}>Created at: {dashboardTemplate.lastEdited}</li>, <li  key={`second list item`}>Not published to GitHub</li>]
  }
  else if (dashboard && dashboardTemplate.url) {
    dashboardList = [<li key={`firstListItem`}>Created at: {dashboardTemplate.lastEdited}</li>, <li  key={`second list item`}>{dashboardTemplate.url}</li>]
  }
  return (
    <Aux>
      <Modal selectedTemplate={selectedTemplate ? selectedTemplate.title : ''} id={title} show={showModal} closeModal={closeModal} className='detailModal' title={title} type='templateSelect'>
        <DetailedTemplate
          img={img}
          src={src}
          type = {type}
          guestContinueShow={guestContinueShow}
          closeModal={closeModal}
          title={title}
          template={selectedTemplate}
          isAuthenticated={isAuthenticated}
          dashboardTemplate={dashboardTemplate}
          dashboard={dashboard} />
      </Modal>
      <button onClick={() => viewTemplate(title, type)} >
          <div className="card m-4 " style={{width: "25vw"}}>
            <img className="card-img-top" src={img} alt={title}/>
            <div className="card-footer d-flex flex-column">
              <h5><p className="card-title text-center">{title}</p></h5>
                {inputs ? `What you'll need:` : '' }
              <ul style={{textAlign:'left'}}>
                {inputs ? Object.keys(inputs).map((inputType, i) => {
                  return inputs[inputType] !== 0 ? 
                  <li key={title + inputType}>{`${inputs[inputType]} x ${inputType}`}</li> 
                  : null;
                }) : ''}
                {dashboardList}
              </ul>
            </div>
          </div>
      </button>
    </Aux>
  )

}



export default Template;