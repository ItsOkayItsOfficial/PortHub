import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';

import './UserResumes.css';

const UserResumes = (props) => {
  console.log(props.userResumes)
  const resumes = props.userResumes ? props.userResumes.map((resume, i) => {
    return <Template
            dashboardTemplate={resume}
            dashboard={true}
            key={resume._id}
            img={resume.img}
            title={resume.templateName}
            id={resume._id}
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
    <div style={{textAlign:'center'}}>
    {resumes.length !== 0 ? resumes : 
      <h2> It looks like you don't have any resumes yet.. make one, I dare you. </h2>}
    </div>
  )
}

export default UserResumes;