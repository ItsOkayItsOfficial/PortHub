import React from "react";
import   './TemplatePage.css';
import Template from './Template';
import Resumes from './Resumes.json';
import {Col} from '../../components/Grid';
import Websites from './Websites.json';
import Requirements from './Requirements/Requirements'
import Aux from '../../HOCs/Aux';


const TemplatePage = ({ type, children, showModal, closeModal, viewTemplate, selectedTemplate }) => {

  return(
    <Aux>
      <div className='d-flex'>
        <div className='d-flex flex-row'>
          <Requirements />
          <Col size='lg-9' className='d-flex flex-col flex-wrap justify-content-center'>
            <div className='d-flex flex-row'>
              <h3>Create your {type}</h3>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            { type==='resume' ? Resumes.map((resume) => {
              return <Template key={resume.title} 
                              img={resume.img}
                              title={resume.title}
                              inputs={resume.inputs}
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
                              inputs={website.inputs}
                              showModal={showModal}
                              viewTemplate={viewTemplate}
                              closeModal={closeModal}
                              selectedTemplate={selectedTemplate}/>
              })
            }
            </div>
          </Col>
        </div>
      </div>
    </Aux>
  )
}
export default TemplatePage;
