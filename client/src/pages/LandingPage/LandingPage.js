import React from "react";
import { Link } from 'react-router-dom'
import   './LandingPage.css';

const LandingPage = ({ children }) =>
  <div className="d-relative">
      <div className="row">
        <div className="col text-center landingJumbo" style={{position:"relative", marginTop:"15vh", width:"100vw"}}>
          <img className="img-fluid rounded" src='/assets/images/ph/porthub_logo.png' alt="logo"/>       
          <p className=".display-4"> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the job market and get that job your deserve.</p>      
        </div>
      </div>
      <div className="row mx-auto" style={{position:"absolute", top:"80vh", width:"100%"}}>
            <div className="col-lg-4 col-sm-10 offset-lg-2 offset-sm-1 d-flex p-0 text-center">
              <Link to='createsite' className="btn btn-warning mx-4 w-100 landingButton">Create a Portfolio Website</Link>
            </div>
            <div className="col-lg-4 col-sm-10  offset-sm-1 p-0 d-flex text-center p-0">     
              <Link to='createresume'className="btn btn-info mx-4 w-100 landingButton">Create a Resume</Link>
            </div>
      </div>
    <div className='fullscreen-bg'>
      <video className='fullscreen-bg__video' autoPlay muted loop>
        <source src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4"
        type="video/mp4"></source>
      </video>  
    </div>
</div>
export default LandingPage;
