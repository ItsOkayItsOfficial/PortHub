import React from "react";
import { Link } from 'react-router-dom';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import LoginButton from './NavLinks/LoginButton';
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = ({ title, ghRedirect, isAuthenticated, user, logoutHandler, loginHandler, reset }) => {
  return (
  <nav className="navbar navbar-expand bg-dark text-white">
      <div className="navbar-header">
        <div onClick={reset} className="navbar-brand">
          <Link to="/" ><img src='/assets/images/ph/porthub_icon.png' alt='ph logo' /></Link>
        </div>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            {isAuthenticated ? <WelcomeMessage user={user}
                                              logout={logoutHandler} /> 
                                              : <LoginButton
                                                  login={loginHandler} />}
        </ul>
      </div>
  </nav>
  )
}


export default Navbar;
