import React from "react";
import { Link } from 'react-router-dom';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import LoginButton from './NavLinks/LoginButton';
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = ({ title, ghRedirect, isAuthenticated, user, logoutHandler }) => {
  return (
  <nav id="navbar" className="navbar navbar-default navbar-fixed-top text-white bg-dark">
    <div className="container-fluid align-self-center">
      <div className="navbar-header">
        <div className="navbar-brand">
          <Link to="/"><img src='/assets/images/ph/porthub_icon.png' alt='ph logo' /></Link>
        </div>

      </div>
      <div className="navbar-title my-auto h-100" ></div>
      <ul className="nav navbar-nav">
          {isAuthenticated ? <WelcomeMessage user={user}
                                             logout={logoutHandler} /> 
                                             : <LoginButton />}
      </ul>
    </div>
  </nav>
  )
}


export default Navbar;
