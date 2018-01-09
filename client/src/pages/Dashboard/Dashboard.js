import React from 'react';
import { Sidebar, Icon} from 'semantic-ui-react'
import UserSites from './UserSites/UserSites';
import UserResumes from './UserResumes/UserResumes';
import UserEducation from './UserEducation/UserEducation';
import UserPortfolio from './UserPortfolio/UserPortfolio';
import UserExperience from './UserExperience/UserExperience';
import UserSkills from './UserSkills/UserSkills';
import UserContact from './UserContact/UserContact';
import Aux from '../../components/Auxiliary/Auxiliary';
import './Dashboard.css';

const Dashboard = ({currentUser, showModal, dashboardInputViewer, closeModal, viewTemplate, selectedDashboardID, guestContinueShow,                      selectedTemplate, isAuthenticated, viewingSites, currentDashboardPage, prepareStateHandler, updateUserInputs}) => {
    const userSites = currentUser.template ? currentUser.template.filter(template => template.type === 'site') : '';
    const userResumes = currentUser.template ? currentUser.template.filter(template => template.type === 'resume') : ''
    let currentPage = '';
      switch (currentDashboardPage) {
      case "sites":
            currentPage = <UserSites userSites={userSites}
                  showModal={showModal}
                  viewTemplate={viewTemplate}
                  closeModal={closeModal}
                  selectedTemplate={selectedTemplate}
                  guestContinueShow={guestContinueShow}
                  selectedDashboardID={selectedDashboardID} />;
            break;
      case "resumes":
            currentPage = <UserResumes userResumes={userResumes}
                  showModal={showModal}
                  viewTemplate={viewTemplate}
                  closeModal={closeModal}
                  selectedTemplate={selectedTemplate}
                  guestContinueShow={guestContinueShow}
                  isAuthenticated={isAuthenticated}
                  selectedDashboardID={selectedDashboardID} />;
            break;
      case 'contact':
              currentPage = <UserContact
                  changed={prepareStateHandler}
                  contact={currentUser.contact}
                  updateUserInputs={updateUserInputs} />
              break; 
      case 'education':
            currentPage = <UserEducation
                  changed={prepareStateHandler}
                  education={currentUser.education}
                  updateUserInputs={updateUserInputs} /> 
            break;    
      case 'experience':
            currentPage = <UserExperience
                  changed={prepareStateHandler}
                  experience={currentUser.experience}
                  updateUserInputs={updateUserInputs} />
            break;
      case 'portfolio':
            currentPage = <UserPortfolio
                  changed={prepareStateHandler}
                  portfolio={currentUser.portfolio}
                  updateUserInputs={updateUserInputs} />
            break;
      case 'skills':
            currentPage =  <UserSkills
                  changed={prepareStateHandler}
                  skills={currentUser.skills}
                  updateUserInputs={updateUserInputs} />
            break;                                                            
      default:
            break;
    }
  return (
    <Aux>
      <Sidebar visible={true} style={{backgroundColor:'#4F575E'}}>
      <div style={{marginTop:'80px'}}>
        <div  className='menuItem' onClick={() => dashboardInputViewer('sites')}>
          <Icon name='browser' size='big' />
          <h3>View Sites</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('resumes')}>
          <Icon name='browser' size='big' />
          <h3>View Resumes</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('contact')}>
          <Icon name='browser' size='big' />
          <h3>Contact</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('education')}>
          <Icon name='browser' size='big' />
          <h3>Education</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('experience')}>
          <Icon name='browser' size='big' />
          <h3>Experience</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('portfolio')}>
          <Icon name='browser' size='big' />
          <h3>Portfolio</h3>
        </div>
        <div  className='menuItem' onClick={() => dashboardInputViewer('skills')}>
          <Icon name='browser' size='big' />
          <h3>Skills</h3>
        </div>
      </div>
      </Sidebar>
      <div className='dashboardContent'>
      {currentPage}
      </div>
    </Aux>

  )
}

export default Dashboard;