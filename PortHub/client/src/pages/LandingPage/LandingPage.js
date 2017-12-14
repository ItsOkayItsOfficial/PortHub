import React from "react";
import {Col} from "../../components/Grid";
import Jumbtron from '../../components/Jumbotron';
import   './LandingPage.css';

const LandingPage = ({ children }) =>
<div>
      <Jumbtron>
      </Jumbtron>
      <div className="jumbotron-contents">
        <img src='/assets/images/ph/porthub_logo.png' alt="logo"/>       
         <p> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the job market and get that job your deserve.</p>
      </div>      
      <Col size='lg-12' className='d-flex flex-row justify-content-center'>
        <a href='/createsite' className="btn btn-warning landingButton">Create a Portfolio Website</a>
        <a href='/createresume'className="btn btn-info  landingButton">Create a Resume</a>
      </Col> 
    <div className="fullscreen-bg">
      <video className="fullscreen-bg__video" autoPlay="true" name="media" loop>
        <source src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4"
        type="video/mp4"></source>
      </video>      
    </div>
</div>
export default LandingPage;
