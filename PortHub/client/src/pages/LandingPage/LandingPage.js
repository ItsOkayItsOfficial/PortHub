import React from "react";
import {Row,Col} from "../../components/Grid";
import Button from '../../components/Button';
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './LandingPage.css';

const LandingPage = ({ children }) =>
<div>
  <Navbar />
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the job market and get that job your deserve.</p>
  </Jumbtron>
  <div>
      <Col size='lg-12' className='d-flex flex-row justify-content-center'>
        <a href='/createsite' className="btn btn-warning m-4 p-2">Create a Portfolio Website</a>
        <a href='/createresume'className="btn btn-info  m-4 p-2">Create a Resume</a>
      </Col>
  </div>
</div>
export default LandingPage;
