import React from 'react';
import './InputPage.css';
import Aux from '../../components/Auxiliary/Auxiliary';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';
import {Montreal, Lawrence, London, Oslo} from '../../components/Websites';
import {ResumeLeftRightRTL, ResumeLeftRight, ResumeMaterialDark, ResumeSideBar, ResumeSideBarRTL, ResumePurple, ResumeOblique} from '../../components/Resumes';
import Portfolio from '../../components/Inputs/Portfolio';
import Accordion from '../../components/Accordion/Accordion';
import { Redirect } from 'react-router';


// import moment from 'moment';

const InputPage = (props) => {
    //Redirects user if they successfully created a site or resume, respectively.
    if (props.success) {
      return (
        <Redirect to={'/success'}/>
      )
    } else if (props.resumeSuccess) {
      return (
          <Redirect to={'/resumeSuccess'}/>
        )
    }
    //If there is no accessToken and no current user, or if no template is chosen, redirects to 404 page
    let accessToken = localStorage.getItem('accessToken')
                      ? localStorage.getItem('accessToken') : '';
    if ((!accessToken && !props.currentUser) || Object.keys(props.currentTemplate).length === 0) {
      return <Redirect to={'/noMatch'} />
    }
    //Logic to dynamically render input fields based on chosen template
    const inputs = 
        props.currentTemplate && props.currentTemplate.inputs ? Object.keys(props.currentTemplate.inputs).map((inputType, i) => {
          return [...Array(props.currentTemplate.inputs[inputType])].map((_, i) => {
            switch (inputType) {
              case ('education'):
                return <Education key={inputType + i} index={i} id={inputType+i} changed={props.prepareStateHandler} education={props.currentUser.education}/>
              case ('skills'):
                return <Skills key={inputType + i} index={i} id={inputType+i} changed={props.prepareStateHandler} skills={props.currentUser.skills}/>
              case ('experience'):
                return <Experience key={inputType + i} index= {i} id={inputType+i} changed={props.prepareStateHandler} experience={props.currentUser.experience}/>
              case ('portfolio'):
                return <Portfolio key={inputType + i} index= {i} id={inputType+i} changed={props.prepareStateHandler} portfolio={props.currentUser.portfolio} />
              default:
                return '';
            }
          })
          
      }) : [];
    
    const education = inputs.slice(1,2);
    const skills = inputs.slice(2,3);
    const portfolio = inputs.slice(3,4);
    const experience = inputs.slice(0,1);

    const currentTemplate = props.currentTemplate.title;

    let selectButton = '';
    const templateProps = {};
    templateProps.education = props.currentUser.education;
    templateProps.experience=props.currentUser.experience;
    templateProps.skills= props.currentUser.skills;
    templateProps.contact= props.currentUser.contact;
    templateProps.portfolio= props.currentUser.portfolio;
    templateProps.clicked= props.submitFormHandler; 

    switch (currentTemplate){
      case "Montreal":
            selectButton = <Montreal {...templateProps }/>;
            break;
      case "Lawrence":
            selectButton = <Lawrence {...templateProps} />
            break;
      case "London":
            selectButton = <London {...templateProps} />
            break;
      case "Oslo":
            selectButton = <Oslo {...templateProps} />
            break;
      case "resume-left-right-rtl":
            selectButton = <ResumeLeftRightRTL {...templateProps} />;
            break; 
      case "resume-left-right":
            selectButton = <ResumeLeftRight {...templateProps} />;
            break; 
      case "resume-material-dark":
            selectButton = <ResumeMaterialDark {...templateProps} />;
            break; 
      case "resume-side-bar":
            selectButton = <ResumeSideBar {...templateProps} />;
            break; 
      case "resume-side-bar-rtl":
            selectButton = <ResumeSideBarRTL {...templateProps} />;
            break; 
      case "resume-purple":
            selectButton = <ResumePurple {...templateProps} />;
            break; 
      case "resume-oblique":
            selectButton = <ResumeOblique {...templateProps} />;
            break;                                                                           
      default:
            break;
    }

      return (
        <div className='inputPage'>
          <BaseInput key={'base'} changed={props.prepareStateHandler} contact={props.currentUser.contact} button={selectButton}/>
          <div id="accordion" role="tablist" aria-multiselectable="true">
              { (education[0] && education[0].length>0) ? <Accordion type="education" i='0'>{education}</Accordion> : ''}
              { (experience[0] && experience[0].length>0) ? <Accordion type="experience" i='1'>{experience}</Accordion> : ''}
              { (skills[0] && skills[0].length>0) ? <Accordion type="skills" i='2'>{skills}</Accordion> : ''}
              { (portfolio[0] && portfolio[0].length>0) ? <Accordion type="portfolio" i='3'>{portfolio}</Accordion> : ''}
          </div>
          <div className="text-center mt-3">
            {selectButton}
          </div>
        </div>
      )
}

export default InputPage;