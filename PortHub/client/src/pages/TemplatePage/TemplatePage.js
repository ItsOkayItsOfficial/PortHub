import React from "react";
import   './TemplatePage.css';
import Template from './Template';
import Resumes from './Resumes.json';
import {Col} from '../../components/Grid';
import Websites from './Websites.json';


const TemplatePage = ({ type, children, showModal, closeModal, viewTemplate, selectedTemplate }) => {
if (type === 'resume'){
  return(
    <div>
    <h1> create your {type} </h1>
    <Col size='lg-12' className="d-flex flex-row flex-wrap justify-content-center">
      {Resumes.map((resume) => {
        return <Template key={resume.title} 
                         img={resume.img}
                         title={resume.title}
                         type = {type}
                         showModal={showModal}
                         viewTemplate={viewTemplate}
                         closeModal={closeModal}
                         selectedTemplate={selectedTemplate}/>
        })
      }
        </Col>
      </div>
  )
} else {
  return(
    <div>
    <h1> create your {type} </h1>
    <Col size='lg-12' className="d-flex flex-row flex-wrap justify-content-center">
      {Websites.map((website) => {
        return <Template key={website.title} 
                         img={website.img}
                         type = {type}
                         title={website.title}
                         showModal={showModal}
                         viewTemplate={viewTemplate}
                         closeModal={closeModal}
                         selectedTemplate={selectedTemplate}/>
        })
      }
        </Col>
      </div>
  )
}
}
export default TemplatePage;
