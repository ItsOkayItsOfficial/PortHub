import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import './UserSites.css';
import { Link } from 'react-router-dom';

const UserSites = (props) => {
  const sites = props.userSites ? props.userSites.map((site, i) => {
    return <Template
            dashboardTemplate={site}
            dashboard={true}
            key={site._id}
            img={site.img}
            title={site.templateName}
            id={site._id}
            type={'dashboard'}
            showModal={props.showModal}
            viewTemplate={props.viewTemplate}
            closeModal={props.closeModal}
            selectedTemplate={props.selectedTemplate}
            guestContinueShow={props.guestContinueShow}
            isAuthenticated={props.isAuthenticated}
            selectedDashboardID={props.selectedDashboardID}
            setHTMLToLocal={props.setHTMLToLocal}
            deleteTemplate={props.deleteTemplate} />
  })
  : '';

  return (
    <div style={{textAlign:'center'}} className="d-flex flex-row flex-wrap justify-content-center">
    {sites.length !== 0 ? sites :
      <div> 
        <h2> It looks like you don't have any personal sites yet..</h2>
        <img src='http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png' alt='mr T' />
        <h2> Go make one </h2>
        <Link to='createsite' className="btn btn-warning m-auto landingButton">Create a Portfolio Website</Link>
      </div>}
    </div>
  )
}

export default UserSites;