import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark text-white">
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link to="/" >  Our Story | </Link>
        </li>
        <li className="nav-item">
            <Link to="/" > Meet the Team  | </Link>
        </li>
        <li className="nav-item">
            <Link to="/" > Repository</Link>
        </li>
      </ul>
    </div>
  )
}


export default Footer;
