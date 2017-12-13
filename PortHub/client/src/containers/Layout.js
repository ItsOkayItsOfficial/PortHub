import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "../pages/LandingPage";
import TemplatePage from "../pages/TemplatePage";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import NoMatch from "../pages/NoMatch";
import Nav from "../components/Navbar";

class Layout extends Component{

  state={
    type:''
  }
  handleTemplate(type){
    if (type !== this.state.type)
      console.log(type);
  }

  render(){
    return(

    <div>       
      <Nav className='navbar-fixed-top' title={this.state.type} />
      <div style={{position:'absolute', top:'60px', width:'100%'}}>
        <Router>        
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/createSite" onChange={this.handleTemplate('site')} render={()=> <TemplatePage type='site'/>}/>
            <Route exact path="/createResume" onChange={this.handleTemplate('resume')} render={()=> <TemplatePage type='resume'/>}/>
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
