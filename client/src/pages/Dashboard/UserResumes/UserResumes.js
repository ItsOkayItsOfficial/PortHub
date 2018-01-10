import React from 'react';
import Template from '../../../pages/TemplatePage/Template/Template';
import { Link } from 'react-router-dom';
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
      <div> 
        <h2> It looks like you don't have any resumes yet..</h2>
        <img src='http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png' alt='mr T' />
        <h2> Go make one </h2>
        <Link to='createresume'className="btn btn-info m-auto landingButton">Create a Resume</Link>
      </div>}
    </div>
  )
}

export default UserResumes;