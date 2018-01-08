import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import './UserResumes.css';

const UserResumes = (props) => {

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
    <div className='d-flex flex-row flex-wrap justify-content-center userResumes'>
    {resumes}
    </div>
  )
}

export default UserResumes;