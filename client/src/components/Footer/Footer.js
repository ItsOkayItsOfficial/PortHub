import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark text-white">
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link to="/ourStory" >  Our Story | </Link>
        </li>
        <li className="nav-item">
            <Link to="/aboutUs" > Meet the Team  | </Link>
        </li>
        <li className="nav-item">
            <Link to="/repository" > Repository</Link>
        </li>
      </ul>
    </div>
  )
}


export default Footer;
