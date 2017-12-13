import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav id="navbar" className="navbar navbar-default navbar-fixed-top text-white bg-dark">
    <div className="container-fluid align-self-center">
      <div className="navbar-header">
        <div className="navbar-brand">
          <a href="/"><img src='/assets/images/ph/porthub_icon.png' alt='ph logo' /></a>
        </div>

      </div>
      <div className="navbar-title my-auto h-100" ></div>
      <ul className="nav navbar-nav">
        <li>
          <a className='btn btn-outline-success' href='/login/'>
          Login
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
