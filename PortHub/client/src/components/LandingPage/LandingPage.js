import React from "react";
import {Row,Col} from "../Grid";
import Button from '../../components/Button';
import Jumbtron from '../Jumbotron'

const LandingPage = ({ children }) =>
<div>
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the job market and get that job your deserve.</p>
  </Jumbtron>
  <div className='position-absolute w-100' style={{bottom:'25%'}}>
    <Row>
      <Col size='lg-12' className='position-absolute'>
        <Button className="btn btn-danger m-4 p-2">Create a Portfolio Website</Button>
        <Button className="btn btn-danger  m-4 p-2">Create a Resume</Button>
      </Col>
    </Row>;
  </div>
</div>
export default LandingPage;
