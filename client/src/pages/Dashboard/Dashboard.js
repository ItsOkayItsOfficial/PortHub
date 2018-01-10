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

const Dashboard = ({currentUser, showModal, dashboardInputViewer, closeModal, viewTemplate, selectedDashboardID, guestContinueShow, selectedTemplate, isAuthenticated, viewingSites, currentDashboardPage, prepareStateHandler, updateUserInputs}) => {
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
      const dateFromObjectId = function (objectId) {
        return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
      };
      const joined = currentUser._id ? dateFromObjectId(currentUser._id).toDateString() : '';

  return (
    <div className='dashboard d-flex'>
      <Sidebar visible={true} style={{backgroundColor:'#4F575E'}} width='wide'>
      <div style={{marginTop:'80px'}}>
        <div className='userDock d-flex'>
            <img className='userDockImg' src={currentUser.avatar_url}/>
              <div className='flex-column'>
              <h3> {currentUser.name}</h3>
              <p>Login: {currentUser.login}</p>
              <p> Member Since: {joined}</p>
            </div>
        </div>
        <div style={{marginTop:'25px'}}className={`${currentDashboardPage === 'sites' ? `activeMenuItem`: 'menuItem'} d-flex`} onClick={() => dashboardInputViewer('sites')}>  
          <h3 className='menuItemHeader'><Icon name='laptop' size='big' />View Sites </h3>
          <div className='templateCount'>{userSites.length}</div>
        </div>
        <div style={{marginBottom:'25px'}} className={`${currentDashboardPage === 'resumes' ? `activeMenuItem`: 'menuItem'} d-flex`} onClick={() => dashboardInputViewer('resumes')}>
          <h3 className='menuItemHeader'><Icon name='browser' size='big' />View Resumes</h3>
          <div className='templateCount'>{userResumes.length}</div>
        </div>
        <div className={`${currentDashboardPage === 'contact' ? `activeMenuItem`: 'menuItem'}`} onClick={() => dashboardInputViewer('contact')}>          <h3 className='menuItemHeader'><Icon name='user circle outline' size='big' />Contact</h3>
        </div>
        <div className={`${currentDashboardPage === 'education' ? `activeMenuItem`: 'menuItem'}`} onClick={() => dashboardInputViewer('education')}>
          <h3 className='menuItemHeader'><Icon name='student' size='big' />Education</h3>
        </div>
        <div  className={`${currentDashboardPage === 'experience' ? `activeMenuItem`: 'menuItem'}`} onClick={() => dashboardInputViewer('experience')}>          <h3 className='menuItemHeader'> <Icon name='briefcase' size='big' />Experience</h3>
        </div>
        <div  className={`${currentDashboardPage === 'portfolio' ? `activeMenuItem`: 'menuItem'}`} onClick={() => dashboardInputViewer('portfolio')}>
          <h3 className='menuItemHeader'><Icon name='folder open' size='big' />Portfolio</h3>
        </div>
        <div  className={`${currentDashboardPage === 'skills' ? `activeMenuItem`: 'menuItem'}`} onClick={() => dashboardInputViewer('skills')}>
          <h3 className='menuItemHeader'><Icon name='tasks' size='big' />Skills</h3>
        </div>
      </div>
      </Sidebar>
      <div className='dashboardContent'>
      {currentPage}
      </div>
    </div>

  )
}

export default Dashboard;