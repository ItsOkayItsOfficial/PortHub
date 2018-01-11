import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
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

import OurStory from '../pages/MoreInfo/OurStory';
import AboutUs from '../pages/MoreInfo/AboutUs';
import Repository from '../pages/MoreInfo/Repository';

import Modal from '../components/Modal/Modal';
import ContinueAsGuest from '../components/ContinueAsGuest/ContinueAsGuest';
import Dashboard from '../pages/Dashboard/Dashboard';
import Keys from '../keys/keys';
import axios from 'axios';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';


class Layout extends Component{
  state = {
    viewingTemplate: false,
    selectedTemplate: {},
    currentUser: {},
    isAuthenticated: false,
    viewingGuestContinueModal: false,
    redirectToInput: false,
    selectedDashboardID: '',
    type:'',
    viewingDashboardSites: true,
    loggedIn: false,
    success: false,
    resumeSuccess: false,
    html: '',
    selectButton:'',
    currentTemplateID:'',
    currentDashboardPage: 'sites'
  }
  //-----------------USER METHODS-------------//
  authenticateUser = () => {
    localStorage.clear('accessToken');
    let accessToken = '';
    const getAuthCode = () => {
      return window.location.href.match(/[&?]code=([\w/-]+)/) ? window.location.href.match(/[&?]code=([\w/-]+)/)[1]
      : '';
    }
   axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id='
      + Keys.herokuClientId + '&client_secret=' + Keys.herokuClientSecret + '&code=' + getAuthCode())
      .then(response => {
        console.log('finished authenticating')
        accessToken = response.data.slice(13, response.data.indexOf('&'));
        localStorage.setItem('accessToken', accessToken);
        this.getUserInfoHandler(accessToken)
      })
      .catch(error => {
        return 'error';
      })
  }

  getUserInfoHandler = (token) => {
   axios.get('https://api.github.com/user?access_token=' + token)
    .then((response) => {
      console.log(response.data)
    return axios.post('/user', response.data)
    })
    .then((user) => {
      user.data.length===1 ? this.setState({currentUser:user.data[0], isAuthenticated:true, loggedIn: true}) : this.setState({currentUser:user.data, isAuthenticated: true, loggedIn:true})
    })
    .catch(error => {
      console.log('Error getting user info: ', error.response)
    })
  }

  redirectToGitHubHandler = () => {
    window.location.replace('https://github.com/login/oauth/authorize?client_id='+
    Keys.herokuClientId + '&redirect_uri=https://realporthub.herokuapp.com/authLoader&state=1234&scope=user,public_repo');
  }

  guestUserHandler =() => {
    const currentUser = {};
    currentUser.login = 'guest';
    currentUser.education = [];
    currentUser.experience = [];
    currentUser.skills = [];
    currentUser.portfolio = []
    this.setState({currentUser, viewingGuestContinueModal:false, loggedIn: true })
  }


  logoutHandler = () => {
    localStorage.clear('accessToken');
    this.setState({currentUser: {}, isAuthenticated:false, loggedIn: false});
  }

  updateUserInputs = () => {
    axios.post('/updateUserInputs', this.state.currentUser)
    .then((response) => {
      Alert.success('Your information has been saved', {
        position:'top-right',
        effect: 'jelly',
        timeout: 3000,
        offset: 55
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  //-------------------------------------------//
  //-----------------VIEW METHODS-------------//
  guestContinueModalHander = () => {
    this.state.viewingGuestContinueModal ?
      this.setState({viewingGuestContinueModal:false})
      : this.setState({viewingGuestContinueModal:true})
  }

  detailedTemplateHandler = (id, title, type, event) => {
    let selectedTemplate = '';
    let selectedDashboardID = '';
      if (type === "resume"){
        selectedTemplate = Resumes.filter(resume => resume.title === title);
      } else if (type==='dashboard') {
         selectedDashboardID = id
      } else {
        selectedTemplate = Websites.filter(website => website.title === title);
      }
      if (selectedTemplate) {
        selectedTemplate = selectedTemplate.shift()
       }
      this.setState({viewingTemplate: true,
                    selectedTemplate,
                    type,
                    selectedDashboardID})
  }

  closeDetailedTemplateHandler = () => {
    this.setState({viewingTemplate: false,
                   selectedTemplate: ''})
  }

  closeAlertsAndResetTemplateHandler = () => {
    Alert.closeAll()
    this.setState({selectedTemplate:{}})
  }

  dashboardInputViewer = (field) => {
      this.setState({currentDashboardPage: field})
  }
  //-----------------------------------------//
  //----------------RESUME METHODS----------//
  retrieveResume = () =>{
    axios.post('/getTemplateID', {templateName:this.state.selectedTemplate.title, login:this.state.currentUser.login})
    .then((templateID) =>{
      console.log("templateID=", templateID.data);
      this.setState({currentTemplateID: templateID.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }
//-----------------------------------------------------//
//-------------------INPUT METHODS--------------------//
  prepareStateHandler = (event, id, field, subfield) => {
    const currentUser = {...this.state.currentUser};
    if (field === 'contact') {
      currentUser.contact ? currentUser.contact={...this.state.currentUser.contact} : currentUser.contact={};
      currentUser.contact[subfield] = event.target.value;
      this.setState({currentUser});
      window.sessionStorage.setItem('contact'+subfield,event.target.value);
    }
    else {
      const userFieldState = [...this.state.currentUser[field]] ? [...this.state.currentUser[field]] : [];
      const inputIndex = this.state.currentUser[field].findIndex(input => {
        console.log(input)
        return input ? input.id === id : '';
      });
      const fieldObj = this.state.currentUser[field][inputIndex] ? {
        ...this.state.currentUser[field][inputIndex]
      } : {id};

      subfield === 'rating' ? fieldObj[subfield] = event : fieldObj[subfield] = event.target.value;
      !userFieldState[inputIndex] ? userFieldState[id[parseInt(id.length-1, 10)]] = fieldObj  : userFieldState[inputIndex]=fieldObj;
      currentUser[field] = userFieldState
      this.setState({currentUser})
    }
  }

  submitFormHandler = (html) => {
    localStorage.setItem('html', html);
    // if resume, update users inputs in database write html to resume.html file then retrieve templateID for download
    if (this.state.type === "resume") {
    //if user is a guest no need to create template in Database
      if (this.state.currentUser.login === 'guest') {
        console.log('guest')
          return axios.post('/insertResumeIntoDb', {html:html, type:this.state.type, currentTemplate:this.state.selectedTemplate.title, login:this.state.currentUser.login})
          .then((response) => {
            return axios.post('/getTemplateID', {templateName:this.state.selectedTemplate.title, login:this.state.currentUser.login})
          })
          .then((templateID) => {
            this.setState({currentTemplateID: templateID.data, resumeSuccess:true});
          })
          .catch((err) => {
            console.log(err);
          })
      }
      else {
        // Create template for valid user in Database
        axios.post('/updateUserInputs', this.state.currentUser)
        .then((response) => {
          return axios.post('/insertResumeIntoDb', {html:html, type:this.state.type, currentTemplate:this.state.selectedTemplate.title, login:this.state.currentUser.login, img:this.state.selectedTemplate.img})
          .then((response) => {
            return axios.post('/getTemplateID', {templateName:this.state.selectedTemplate.title, login:this.state.currentUser.login})
          })
          .then((templateID) =>{
              const tempResume = {
                _id: templateID.data,
                html:html,
                img:this.state.selectedTemplate.img,
                templateName: this.state.selectedTemplate.title,
                type:this.state.type,
                lastEdited: Date.now()
              }
              console.log(tempResume)
              const currentUser = {...this.state.currentUser}
              currentUser.template.push(tempResume);
              this.setState({currentTemplateID: templateID.data,resumeSuccess:true, currentUser});
          })
          .catch((err) => {
            console.log(err);
          })
        })
      }
    }
    //if User is creating a website
    else {
      //if user is a guest, send them to success page. If not a guest, update users inputs and create template in DB
      return this.state.currentUser.login === 'guest' ? this.setState({success:true}) :
      axios.post('/updateUserInputs', this.state.currentUser)
      .then((response) => {
      return axios.post('/site', {html:html, img:this.state.selectedTemplate.img, type:this.state.type, currentTemplate:this.state.selectedTemplate.title, login:this.state.currentUser.login})
      })
      .then((response) => {
        const tempSite = {
          _id: Math.floor(Math.random() * 5),
          html:html,
          img:this.state.selectedTemplate.img,
          templateName: this.state.selectedTemplate.title,
          type:this.state.type,
          lastEdited: Date.now()
        }
        const currentUser = {...this.state.currentUser}
        currentUser.template.push(tempSite);
        response.data==='success' ? this.setState({success:true, currentUser}): console.log('failed')
      })
      .catch((err) => {
        console.log(err)
      });
    };
  }
//-----------------------------------------//
//------------LIFECYCLE METHODS-----------//
  componentDidMount() {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        this.getUserInfoHandler(accessToken)
      }
  }
  componentDidUpdate () {
    if (this.state.success) {
      return this.setState({success: false})
    }
    if (this.state.resumeSuccess) {
      return this.setState({resumeSuccess: false})
    }

  }
  render(){

    return(
      <BrowserRouter
      basename='/app'>
        <div>
          <Modal show={this.state.viewingGuestContinueModal} closeModal={this.guestContinueModalHander} className='continueAsGuest'>
            <ContinueAsGuest
            ghRedirect={this.redirectToGitHubHandler}
            guestUser={this.guestUserHandler} />
          </Modal>
          <Nav className='navbar-fixed-top' ghRedirect={this.redirectToGitHubHandler}
              title={this.state.type} isAuthenticated={this.state.isAuthenticated}
              user={this.state.currentUser}
              logoutHandler={this.logoutHandler}
              reset={this.closeAlertsAndResetTemplateHandler}
              loggedIn={this.state.loggedIn} />
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
                                                            currentTemplate={this.state.selectedTemplate}
                                                            currentUser = {this.state.currentUser}
                                                            retrieveResume = {this.state.retrieveResume}
                                                            success={this.state.success}
                                                            resumeSuccess={this.state.resumeSuccess}
                                                            prepareStateHandler={this.prepareStateHandler}
                                                            submitFormHandler={this.submitFormHandler} />} />
              <Route exact path='/success' render={() => <SuccessPage
                                                            currentUser={this.state.currentUser}
                                                            currentTemplate={this.state.selectedTemplate}/>} />
              <Route exact path='/resumeSuccess' render={() => <ResumeSuccessPage
                                                            currentUser={this.state.currentUser}
                                                            currentTemplate={this.state.selectedTemplate}
                                                            retrieveResume={this.retrieveResume}
                                                            currentTemplateID={this.state.currentTemplateID} />} />} />
              <Route exact path='/siteLoader' render={() => <CreateSiteLoader
                                                            selectedTemplate={this.state.selectedTemplate}
                                                            login={this.state.currentUser.login} />} />
              <Route exact path='/authLoader' render={() => <AuthLoader
                                                            authHandler={this.authenticateUser}
                                                            authenticated={this.state.isAuthenticated}
                                                            currentUser={this.state.currentUser}/>} />
              <Route exact path="/createUser" component={CreateUserPage} />
              <Route exact path="/Login" render={() => <LoginPage
                                                        ghRedirect={this.redirectToGitHubHandler}/>} />
              <Route exact path='/dashboard' render={() => <Dashboard
                                                            currentUser={this.state.currentUser}
                                                            showModal={this.state.viewingTemplate}
                                                            closeModal={this.closeDetailedTemplateHandler}
                                                            viewTemplate={this.detailedTemplateHandler}
                                                            selectedTemplate={this.state.selectedTemplate}
                                                            guestContinueShow={this.guestContinueModalHander}
                                                            viewingContinueAsGuest={this.state.viewingGuestContinueModal}
                                                            isAuthenticated={this.state.isAuthenticated}
                                                            selectedDashboardID={this.state.selectedDashboardID}
                                                            dashboardToggle={this.dashboardViewToggleHandler}
                                                            viewingSites={this.state.viewingDashboardSites}
                                                            dashboardInputViewer={this.dashboardInputViewer}
                                                            currentDashboardPage={this.state.currentDashboardPage}
                                                            prepareStateHandler={this.prepareStateHandler}
                                                            updateUserInputs={this.updateUserInputs}/>}
                                                             />
              <Route exact path="/ourStory" component={OurStory} />
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path="/repository" component={Repository} />
              <Route component={NoMatch} />
            </Switch>
            <Alert stack={{limit: 3}} />
        </div>
      </BrowserRouter>
   )
  }
}

export default Layout;
