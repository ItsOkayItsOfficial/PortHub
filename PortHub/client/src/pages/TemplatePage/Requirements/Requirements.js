import React from 'react';
import './Requirements.css';
import {Col} from '../../../components/Grid';


const Requirements = (props) => {
  return (
    <Col className='requirementBanner' size='md-3'>
      <div className='requirementContent'>
      <div className='row'>
        <h3 className='MainReqHeader'> Requirements </h3>
      </div>
        <div className='row'>
          <div className='col-lg-12'>
          <h4 className='ReqHeaders'>Skills:</h4>
            <ul className='ReqList'>
              <li> Skill Name </li>
              <li> Skill Rating: 1-100 </li>
            </ul>
          </div>
        </div>
          <div className='row'>
           <div className='col-lg-12'>
            <h4 className='ReqHeaders'>Portfolio:</h4>
              <ul className='ReqList'>
                <li>Title</li>
                <li>A 300x300 Image - Images not meeting this standard may cause errors on website!</li>
                <li>Portfolio Description</li>
                <li>Portfolio URL - optional</li>
              </ul>
            </div>
          </div>
          <div className='row'>
          <div className='col-lg-12'>
            <h4 className='ReqHeaders'>Education:</h4>
              <ul className='ReqList'>
                <li>School name and school location</li>
                <li>Type of degree</li>
                <li>Start Date - End Date</li>
              </ul>
            </div>
          </div>
          <div className='row'>
          <div className='col-lg-12'>
            <h4 className='ReqHeaders'>Experience:</h4>
              <ul className='ReqList'>
                <li>Employer Name</li>
                <li>Job Title</li>
                <li>Job Duties</li>
                <li>Start Date - End Date</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
  )
}

export default Requirements;