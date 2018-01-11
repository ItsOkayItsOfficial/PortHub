import React from "react";
import { Link } from 'react-router-dom'
import   './LandingPage.css';
import Footer from '../../components/Footer/Footer';

const LandingPage = ({ children }) =>
  <div id='landing'>

    <div id='container'>
      {/* Logo */}
      <div id='jumbo' className="row text-center p-4 mx-auto">
          <img className="rounded" src='/assets/images/ph/porthub_logo.png' alt="logo"/>
          <p className="d-md-block">Create a portfolio site or resume in minutes!</p>
      </div>

      {/* Buttons */}
      <div id='buttons' className="row mx-auto">
            <div className="col-lg-3 col-sm-8 offset-lg-2 offset-md-2 offset-sm-1 d-flex text-center">
              <Link to='createsite' className="btn btn-warning mx-4 w-100 d-md-block">Create a Portfolio Website</Link>
            </div>
            <div className="col-lg-3 col-sm-8 offset-lg-2 offset-md-2 offset-sm-1 d-flex text-center">
              <Link to='createresume'className="btn btn-info mx-4 w-100 d-md-block">Create a Resume</Link>
            </div>
      </div>

      {/* Landing Background */}
      <div id='background-video'>
        <video autoPlay muted loop>
          <source src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4"
          type="video/mp4"></source>
        </video>
      </div>

      {/* Scroll Triangle */}
      <div id='spacer' className="d-flex justify-content-center">
        <img src="/assets/images/triangle-spacer.png" alt='spacer' rel="noopener noreferrer"></img>
      </div>
    </div>

      {/* Info */}
      <div id='info' className="row d-flex moreInfo p-4 m-0 bg-white">
          <div className="col-12 w-100 d-flex justify-content-center moreInfo-title">How It Works</div>
          <div className="col-lg-4 w-100 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                <p className="m-0 mb-2"><i className="fa fa-github fa-3x"></i></p>
                <p className="m-0 mb-2">Login with GitHub</p>
                <p className="mt-4 text-align-right">If you haven't already login with your <a href="http://github.com" target='_blank' rel="noopener noreferrer">GitHub</a> to authenticate with PortHub. This allows you to deploy your site directly to GitHub, or save your data if you want to use multiple website and resume templates!</p>
          </div>
          <div className="col-lg-4 w-100 d-flex flex-column justify-content-start align-items-center  moreInfo-item">
                <p className="m-0 mb-2"><i className="fa fa-file-text fa-3x"></i></p>
                <p className="m-0 mb-2">Select and Build</p>
                <p className="mt-4 text-align-right">Choose a portfolio webiste or resume template and fill in the necessary fields. If you want to make another template in the future you'll already have this information available in your profile!</p>
          </div>
          <div className="col-lg-4 w-100 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                <p className="m-0 mb-2"><i className="fa fa-globe fa-3x"></i></p>
                <p className="m-0 mb-2">Deploy to GitHub or Download</p>
                <p className="mt-4 text-align-right">Publish your websites to your GitHub account and you'll get a LIVE URL to share.  Need a copy of your resume? Download a PDF with a simple click!</p>
          </div>
          <Footer/>
      </div>

</div>

export default LandingPage;
