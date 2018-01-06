import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import './UserSites.css';

const UserSites = (props) => {
  console.log(props)
  const sites = props.userSites ? props.userSites.map((site, i) => {
    return <Template
            dashboardTemplate={site}
            dashboard={true}
            key={site._id}
            img={site.img}
            title={site.templateName}
            type={site.type}
            showModal={props.showModal}
            viewTemplate={props.viewTemplate}
            closeModal={props.closeModal}
            selectedTemplate={props.selectedTemplate}
            guestContinueShow={props.guestContinueShow}
            isAuthenticated={props.isAuthenticated} />
  })
  : '';

  return (
    <div className='userSites'> 
    {sites}
    </div>
  )
}

export default UserSites;