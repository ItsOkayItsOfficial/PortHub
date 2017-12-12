import React from "react";
import {Row,Col} from "../Grid";
import Button from '../../components/Button';

const LandingPage = ({ children }) =>
  <div className='position-absolute w-100' style={{bottom:'25%'}}>
    <Row>
      <Col size='lg-12' className='position-absolute'>
        <Button className="btn btn-danger m-4 p-2">Create a Portfolio Website</Button>
        <Button className="btn btn-danger  m-4 p-2">Create a Resume</Button>
      </Col>
    </Row>;
  </div>

export default LandingPage;
