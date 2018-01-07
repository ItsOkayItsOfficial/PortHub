import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import './UserSites.css';

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
            selectedDashboardID={props.selectedDashboardID} />
  })
  : '';

  return (
    <div className='userSites'> 
    {sites}
    </div>
  )
}

export default UserSites;