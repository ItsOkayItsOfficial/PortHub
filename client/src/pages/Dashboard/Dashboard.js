import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import UserSites from './UserSites/UserSites';
import UserResumes from './UserResumes/UserResumes';
import Aux from '../../components/Auxiliary/Auxiliary';

const Dashboard = (props) => {
  console.log(props.currentUser)
    const userSites = props.currentUser.template ? props.currentUser.template.filter(template => template.type === 'site') : '';
    const userResumes = props.currentUser.template ? props.currentUser.template.filter(template => template.type === 'resume') : ''
  return (
    <Aux>
      <Sidebar visible={true} style={{top:'80px', backgroundColor:'black'}}>
      </Sidebar>
        <UserSites userSites={userSites}
                  showModal={props.showModal}
                  viewTemplate={props.viewTemplate}
                  closeModal={props.closeModal}
                  selectedTemplate={props.selectedTemplate}
                  guestContinueShow={props.guestContinueShow} />
        <UserResumes userSites={userResumes}
                  showModal={props.showModal}
                  viewTemplate={props.viewTemplate}
                  closeModal={props.closeModal}
                  selectedTemplate={props.selectedTemplate}
                  guestContinueShow={props.guestContinueShow}
                  isAuthenticated={props.isAuthenticated} />
    </Aux>

  )
}

export default Dashboard;