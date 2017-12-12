import React from "react";
import   './TemplatePage.css';
import Template from './Template/Template';
import {Resumes} from './Resumes.js'

const TemplatePage = ({ type, children }) =>
<div>
  {Resumes.map((resume) => {
    return <Template key={resume.img} img={resume.img} />
  })}
</div>
export default TemplatePage;
