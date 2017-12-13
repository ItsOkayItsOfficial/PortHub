import React from "react";
import   './TemplatePage.css';
import Template from './Template';
import Resumes from './Resumes.json'
import {Col} from '../../components/Grid'

const TemplatePage = ({ type, children }) =>
<div>

  <Col size='l-12' className="d-flex flex-row flex-wrap justify-content-center">
    {Resumes.map((resume) => {
      return <Template key={resume.img} img={resume.img} title={resume.title}/>
      })
    }
  </Col>
</div>
export default TemplatePage;
