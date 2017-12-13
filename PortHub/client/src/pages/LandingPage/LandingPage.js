import React from "react";
import {Col} from "../../components/Grid";
import Jumbtron from '../../components/Jumbotron';
import   './LandingPage.css';

const LandingPage = ({ children }) =>
<div>
      <Jumbtron>
        <img src='/assets/images/ph/porthub_logo.png' alt="logo" />       
        <p> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the job market and get that job your deserve.</p>
      </Jumbtron>
      <Col size='lg-12' className='d-flex flex-row justify-content-center'>
        <a href='/createsite' className="btn btn-warning landingButton">Create a Portfolio Website</a>
        <a href='/createresume'className="btn btn-info  landingButton">Create a Resume</a>
      </Col> 
</div>
export default LandingPage;
