import React from "react";
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './NoMatch.css';

const NoMatch = ({ children }) =>
<div>
  <Jumbtron>
    <img src='/assets/images/ph/porthub_logo.png' alt="logo" />       
    <p> 404 Page not found </p>
  </Jumbtron>

</div>
export default NoMatch;
