import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import UserSites from './UserSites/UserSites';
import UserResumes from './UserResumes/UserResumes';
import Aux from '../../components/Auxiliary/Auxiliary';
import './Dashboard.css';

const Dashboard = (props) => {
    const userSites = props.currentUser.template ? props.currentUser.template.filter(template => template.type === 'site') : '';
    const userResumes = props.currentUser.template ? props.currentUser.template.filter(template => template.type === 'resume') : ''
  return (
    <Aux>
      <Sidebar visible={true} style={{backgroundColor:'#4F575E'}}>
      <div style={{marginTop:'80px'}}>
        <div  className='menuItem' onClick={props.dashboardToggle}>
          <Icon name='browser' size='big' />
          <h3>{props.viewingSites ? `View Resumes` : `View Sites`}</h3>
        </div>
      </div>
      </Sidebar>
      {props.viewingSites ?
        <UserSites userSites={userSites}
                  showModal={props.showModal}
                  viewTemplate={props.viewTemplate}
                  closeModal={props.closeModal}
                  selectedTemplate={props.selectedTemplate}
                  guestContinueShow={props.guestContinueShow}
                  selectedDashboardID={props.selectedDashboardID} /> :
        <UserResumes userResumes={userResumes}
                  showModal={props.showModal}
                  viewTemplate={props.viewTemplate}
                  closeModal={props.closeModal}
                  selectedTemplate={props.selectedTemplate}
                  guestContinueShow={props.guestContinueShow}
                  isAuthenticated={props.isAuthenticated}
                  selectedDashboardID={props.selectedDashboardID} />}
    </Aux>

  )
}

export default Dashboard;