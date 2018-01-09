import React from "react";
import { Link } from 'react-router-dom';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import LoginButton from './NavLinks/LoginButton';
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = ({ title, ghRedirect, isAuthenticated, user, logoutHandler, reset, loggedIn }) => {
  return (
    <div>
        <nav className="navbar navbar-expand fixed-top bg-dark text-white">
            <div className="navbar-header">
              <div onClick={reset} className="navbar-brand">
                <Link to="/" ><img className="rounded" style={{border:'1px solid white'}} src='/assets/images/ph/porthub_icon.png' alt='ph logo' /></Link>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  {loggedIn ? <WelcomeMessage 
                                      user={user}
                                      logout={logoutHandler}
                                      loggedIn={loggedIn}
                                      reset={reset} /> 
                                      : <LoginButton />}                                
              </ul>
            </div>
        </nav>
    </div>
  )
}


export default Navbar;
