import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import './UserResumes.css';

const UserResumes = (props) => {
  const resumes = props.userResumes ? props.userResumes.map((resume, i) => {
    return <Template
            key={resume._id}
            img={resume.img}
            title={resume.templateName}
            type={resume.type}
            showModal={props.showModal}
            viewTemplate={props.viewTemplate}
            closeModal={props.closeModal}
            selectedTemplate={props.selectedTemplate}
            guestContinueShow={props.guestContinueShow}
            isAuthenticated={props.isAuthenticated} />
  })
  : '';
  return (
    <div className='userResumes'>{resumes}</div>
  )
}

export default UserResumes;