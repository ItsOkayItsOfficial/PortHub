import React from "react";
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './NoMatch.css';

const NoMatch = ({ children }) =>
<div>
  <Navbar />
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> 404 Page not found </p>
  </Jumbtron>

</div>
export default NoMatch;
