import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
import CreateSiteLoader from '../pages/LoadingPages/CreateSiteLoader/CreateSiteLoader';
import AuthLoader from '../pages/LoadingPages/AuthLoader/AuthLoader';
import Keys from '../keys/keys';
import axios from 'axios';

class Layout extends Component{

  state = {
    viewingTemplate: false,
    selectedTemplate: {},
    currentUser: {},
    isAuthenticated: false
  }

  detailedTemplateHandler = (title, type) => {
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

  redirectToGitHubHandler = () => {
    window.location.replace('https://github.com/login/oauth/authorize?client_id=' 
  + Keys.clientId + '&redirect_uri=http://localhost:3000/authLoader&state=1234&scope=user,public_repo');
  }

  getUserInfoHandler = (token) => {
      return axios.get('https://api.github.com/user?access_token=' + token)
              .then((response) => {
                this.setState({currentUser:response.data, isAuthenticated: true})
              })
              .catch(error => {
                console.log('Error getting user info: ', error.response)
              })
  }
  componentDidMount() {
      let accessToken = localStorage.getItem('accessToken') === 'ification_code' ? localStorage.clear()
                    : localStorage.getItem('accessToken');
      if (accessToken) {
        return this.getUserInfoHandler(accessToken)
      }
  }
  render(){
    return(
    <div>       
      <Nav className='navbar-fixed-top' ghRedirect={this.redirectToGitHubHandler}title={this.state.type} />
      <div style={{position:'absolute', top:'60px', width:'100%'}}>
        <Router>        
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/createSite" 
                  //  onChange={this.handleTemplate('site')} 
                   render={()=> <TemplatePage 
                                type='site'
                                showModal={this.state.viewingTemplate}
                                closeModal={this.closeDetailedTemplateHandler}
                                viewTemplate={this.detailedTemplateHandler}
                                selectedTemplate={this.state.selectedTemplate}/>}
            />
            <Route exact path="/createResume" 
                  //  onChange={this.handleTemplate('resume')} 
                   render={()=> <TemplatePage 
                                  type='resume'
                                  showModal={this.state.viewingTemplate}
                                  closeModal={this.closeDetailedTemplateHandler}
                                  viewTemplate={this.detailedTemplateHandler}
                                  selectedTemplate={this.state.selectedTemplate}/>}
            />
            <Route exact path='/inputPage' render={() => <InputPage
                                                          selectedTemplate={this.state.selectedTemplate} />} />
            <Route exact path='/success' render={() => <SuccessPage
                                                           />} />
            <Route exact path='/siteLoader' render={() => <CreateSiteLoader
                                                          selectedTemplate={this.state.selectedTemplate}
                                                          login={this.state.currentUser.login} />} />
            <Route exact path='/authLoader' render={() => <AuthLoader
                                                          selectedTemplate={this.state.selectedTemplate} />} />
            <Route exact path="/createUser" component={CreateUserPage} />
            <Route exact path="/Login" component={LoginPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    </div>

    )
      
  }
}

export default Layout;