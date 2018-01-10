import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark text-white align-content-around">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/ourStory">Our Story</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/aboutUs">Meet the Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/repository">Repository</a>
            </li>
          </ul>    
    </div>
  )
}


export default Footer;
