import React from 'react';
import Modal from '../../../components/Modal/Modal';
import DetailedTemplate from './DetailedTemplate/DetailedTemplate';
import Aux from '../../../components/Auxiliary/Auxiliary';
import './Template.css';
import ReactTooltip from 'react-tooltip'

const Template = ({ img, src, type, title, showModal, closeModal, viewTemplate, selectedTemplate, inputs, guestContinueShow, isAuthenticated, dashboard, createdAt, dashboardTemplate, selectedDashboardID, id }) => {
let dashboardList = '';
      const dateFromObjectId = function (objectId) {
        return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
      };
      const createdOn = dashboard && dashboardTemplate._id.length > 5 ? dateFromObjectId(dashboardTemplate._id).toDateString() : '';
  return (
    <div style={{margin:'5px'}}>
      <Modal selectedTemplate={selectedTemplate ? selectedTemplate.title : ''} dashboardID={dashboardTemplate ? dashboardTemplate._id : ''} selectedDashboardID={selectedDashboardID} id={title} show={showModal} closeModal={closeModal} className='detailModal' title={title} type='templateSelect'>
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
      <button style={{height: !dashboard ? '100%' : ''}} onClick={() => viewTemplate(id, title, type)} >
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
              </ul>
            </div>
          </div>
      </button>
      {dashboard && dashboardTemplate.type === 'site' ?
      <div className='dashboardFooter'>
        <p> Created On: {createdOn ? createdOn : dashboardTemplate.lastEdited} </p>
        {dashboardTemplate.url ? <Aux><a  className='htmlButton' href={`https://${dashboardTemplate.url}`} target='_blank' data-tip="React-tooltip" data-for={dashboardTemplate._id}><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <ReactTooltip id={dashboardTemplate._id} effect="solid">Go to {dashboardTemplate.url} </ReactTooltip></Aux> : ''}
        <button className='htmlButton' data-toggle="modal" data-target="#viewHTML" data-for='htmlTooltip' data-tip="React-tooltip"><i className="fa fa-code fa-2x" aria-hidden="true"></i></button><ReactTooltip id='htmlTooltip' effect="solid">View HTML </ReactTooltip>
        <div className="modal fade bd-example-modal-lg" id="viewHTML" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{textAlign:'left', wordWrap: 'break-word'}}>  
            {dashboardTemplate.html}
            </div>
          </div>
        </div>
      </div> : ''}
    </div>
  )

}



export default Template;