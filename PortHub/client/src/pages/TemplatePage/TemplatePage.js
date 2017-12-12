import React from "react";
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './TemplatePage.css';

const TemplatePage = ({ children }) =>
<div>
  <Navbar />
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> Templates for Website or Resume</p>
  </Jumbtron>

</div>
export default TemplatePage;
