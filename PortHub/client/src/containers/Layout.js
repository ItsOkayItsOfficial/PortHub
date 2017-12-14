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

class Layout extends Component{

  state={
    viewingTemplate: false,
    selectedTemplate: {}
  }
  handleTemplate(type){
    if (type !== this.state.type)
      console.log(type);
  }

  detailedTemplateHandler = (title, type) => {
    let selectedTemplate = '';
      if (type === "resume"){
        selectedTemplate = Resumes.filter(resume => resume.title === title);
      } else {

        selectedTemplate = Websites.filter(website => website.title === title);
        console.log (selectedTemplate);
      }
      selectedTemplate = selectedTemplate.shift();
      this.setState({viewingTemplate: true,
                    selectedTemplate})
    }
  closeDetailedTemplateHandler = () => {
    this.setState({viewingTemplate: false,
                   selectedTemplate: ''})
  }
  render(){
    return(

    <div>       
      <Nav className='navbar-fixed-top' title={this.state.type} />
      <div style={{position:'absolute', top:'60px', width:'100%'}}>
        <Router>        
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/createSite" 
                   onChange={this.handleTemplate('site')} 
                   render={()=> <TemplatePage 
                                type='site'
                                showModal={this.state.viewingTemplate}
                                closeModal={this.closeDetailedTemplateHandler}
                                viewTemplate={this.detailedTemplateHandler}
                                selectedTemplate={this.state.selectedTemplate}/>}
            />
            <Route exact path="/createResume" 
                   onChange={this.handleTemplate('resume')} 
                   render={()=> <TemplatePage 
                                  type='resume'
                                  showModal={this.state.viewingTemplate}
                                  closeModal={this.closeDetailedTemplateHandler}
                                  viewTemplate={this.detailedTemplateHandler}
                                  selectedTemplate={this.state.selectedTemplate}/>}
            />
            <Route exact path='/inputPage' render={() => <InputPage
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
