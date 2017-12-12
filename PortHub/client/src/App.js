import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TemplatePage from "./pages/TemplatePage";
import CreateUserPage from "./pages/CreateUserPage";
import LoginPage from "./pages/LoginPage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navbar";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/createSite" component={TemplatePage} />
        <Route exact path="/createResume" component={TemplatePage} />
        <Route exact path="/createUser" component={CreateUserPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
