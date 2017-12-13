import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav id="navbar" className="navbar navbar-default navbar-fixed-top text-white">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand" to="/" style={{display:'none'}}>
          Porthub // make invisible on landing page then visible when other menus
        </div>
      </div>
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
