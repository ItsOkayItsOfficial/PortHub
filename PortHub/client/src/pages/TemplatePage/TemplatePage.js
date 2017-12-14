import React from "react";
import   './TemplatePage.css';
import Template from './Template';
import Resumes from './Resumes.json';
import {Col} from '../../components/Grid';
import Websites from './Websites.json';


const TemplatePage = ({ type, children, showModal, closeModal, viewTemplate, selectedTemplate }) => {

  return(
    <div className='text-center'>
    <h1> create your {type} </h1>
    <Col size='lg-12' className="d-flex flex-row flex-wrap justify-content-center">
      { type==='resume' ? Resumes.map((resume) => {
        return <Template key={resume.title} 
                         img={resume.img}
                         title={resume.title}
                         type = {type}
                         showModal={showModal}
                         viewTemplate={viewTemplate}
                         closeModal={closeModal}
                         selectedTemplate={selectedTemplate}/>
        })
      : Websites.map((website) => {
        return <Template key={website.title} 
                         img={website.img}
                         src={website.src}
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
export default TemplatePage;
