import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TemplatePage from "../pages/TemplatePage";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import NoMatch from "../pages/NoMatch";
import Nav from "../components/Navbar";
import InputPage from '../pages/InputPage/InputPage';
import Resumes from '../pages/TemplatePage/Resumes.json';
import Websites from '../pages/TemplatePage/Websites.json';
import SuccessPage from '../pages/SuccessPage/SuccessPage';
import ResumeSuccessPage from '../pages/SuccessPage/ResumeSuccessPage';
import CreateSiteLoader from '../pages/LoadingPages/CreateSiteLoader/CreateSiteLoader';
import AuthLoader from '../pages/LoadingPages/AuthLoader/AuthLoader';
import Modal from '../components/Modal/Modal';
import ContinueAsGuest from '../components/ContinueAsGuest/ContinueAsGuest';
import Keys from '../keys/keys';
import axios from 'axios';
import Aux from '../components/Auxiliary/Auxiliary';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
require('default-passive-events');

class Layout extends Component{

  state = {
    viewingTemplate: false,
    selectedTemplate: {},
    currentUser: {},
    isAuthenticated: false,
    viewingGuestContinueModal: false,
    redirectToInput: false,
    type:''
  }

  detailedTemplateHandler = (title, type, event) => {
    this.setState({type:type});
    let selectedTemplate = '';
      if (type === "resume"){
        selectedTemplate = Resumes.filter(resume => resume.title === title);
      } else {

        selectedTemplate = Websites.filter(website => website.title === title);
      }
      selectedTemplate = selectedTemplate.shift();
      this.setState({viewingTemplate: true,
                    selectedTemplate})
  }

  closeDetailedTemplateHandler = () => {
    this.setState({viewingTemplate: false,
                   selectedTemplate: ''})
  }

  guestContinueModalHander = () => {
    this.state.viewingGuestContinueModal ?
      this.setState({viewingGuestContinueModal:false})
      : this.setState({viewingGuestContinueModal:true})
  }

  guestUserHandler =() => {
    const currentUser = {};
    currentUser.login = 'guest';
    currentUser.education = [];
    currentUser.experience = [];
    currentUser.skills = [];
    currentUser.portfolio = []
    this.setState({currentUser, viewingGuestContinueModal:false })
  }

  redirectToGitHubHandler = () => {
    console.log("clientid:", Keys.clientId);
    window.location.replace('https://github.com/login/oauth/authorize?client_id='+ 
    Keys.clientId + '&redirect_uri=https://realporthub.herokuapp.com/authLoader&state=1234&scope=user,public_repo');
  }

  getUserInfoHandler = (token) => {
   axios.get('https://api.github.com/user?access_token=' + token)
    .then((response) => {
    return axios.post('/api/user', response.data) 
    })
    .then((user) => {
      console.log("logged in user: ", user.data[0].login);
      user.data.length===1 ? this.setState({currentUser:user.data[0]}) : this.setState({currentUser:user.data})
    })
    .catch(error => {
      console.log('Error getting user info: ', error.response)
    })
  }

  logoutHandler = () => {
    localStorage.clear('accessToken');
    this.setState({currentUser: {}, isAuthenticated:false});
    window.location.replace('/')
  }

  closeAlertsAndResetTemplateHandler = () => {
    Alert.closeAll()
    this.setState({selectedTemplate:{}})
  }
  componentWillMount() {
      const accessToken = localStorage.getItem('accessToken') === 'ification_code' ? localStorage.clear()
                    : localStorage.getItem('accessToken');
      if (accessToken) {
        this.setState({isAuthenticated: true})
        this.getUserInfoHandler(accessToken)
      }
  }

  render(){

    return(
      <Router>
        <Aux>
          <Modal show={this.state.viewingGuestContinueModal} closeModal={this.guestContinueModalHander} className='continueAsGuest'>
            <ContinueAsGuest 
            ghRedirect={this.redirectToGitHubHandler}
            guestUser={this.guestUserHandler} />
          </Modal>
          <Nav className='navbar-fixed-top' ghRedirect={this.redirectToGitHubHandler}
              title={this.state.type} isAuthenticated={this.state.isAuthenticated}
              user={this.state.currentUser}
              getUserInfo={this.getUserInfoHandler}
              logoutHandler={this.logoutHandler}
              reset={this.closeAlertsAndResetTemplateHandler} />    
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/createSite" 
                    //  onChange={this.handleTemplate('site')} 
                    render={()=> <TemplatePage 
                                  type='site'
                                  showModal={this.state.viewingTemplate}
                                  closeModal={this.closeDetailedTemplateHandler}
                                  viewTemplate={this.detailedTemplateHandler}
                                  selectedTemplate={this.state.selectedTemplate}
                                  guestContinueShow={this.guestContinueModalHander}
                                  viewingContinueAsGuest={this.state.viewingGuestContinueModal}
                                  isAuthenticated={this.state.isAuthenticated} />}
              />
              <Route exact path="/createResume" 
                    //  onChange={this.handleTemplate('resume')} 
                    render={()=> <TemplatePage 
                                    type='resume'
                                    showModal={this.state.viewingTemplate}
                                    closeModal={this.closeDetailedTemplateHandler}
                                    viewTemplate={this.detailedTemplateHandler}
                                    selectedTemplate={this.state.selectedTemplate}
                                    guestContinueShow={this.guestContinueModalHander}
                                    viewingContinueAsGuest={this.state.viewingGuestContinueModal}
                                    isAuthenticated={this.state.isAuthenticated}/>}
              />
              <Route exact path='/inputPage' render={() => <InputPage
                                                            type = {this.state.type}
                                                            selectedTemplate={this.state.selectedTemplate} 
                                                            currentUser = {this.state.currentUser} />} />
              <Route exact path='/success' render={() => <SuccessPage
                                                            currentUser={this.state.currentUser}
                                                            currentTemplate={this.state.selectedTemplate}/>} />
              <Route exact path='/resumeSuccess' render={() => <ResumeSuccessPage
                                                            />} />                                                            
              <Route exact path='/siteLoader' render={() => <CreateSiteLoader
                                                            selectedTemplate={this.state.selectedTemplate}
                                                            login={this.state.currentUser.login} />} />
              <Route exact path='/authLoader' render={() => <AuthLoader
                                                            selectedTemplate={this.state.selectedTemplate} />} />
              <Route exact path="/createUser" component={CreateUserPage} />
              <Route exact path="/Login" render={() => <LoginPage 
                                                        ghRedirect={this.redirectToGitHubHandler}/>} />
              <Route component={NoMatch} />
            </Switch>
            <Alert stack={{limit: 3}} />
        </Aux>
      </Router>

    )
      
  }
}

export default Layout;
