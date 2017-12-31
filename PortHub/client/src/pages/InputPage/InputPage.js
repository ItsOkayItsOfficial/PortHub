import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Aux from '../../HOCs/Aux';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';

import {Montreal, Lawrence, London, Oslo} from '../../components/Websites';
import {ResumeLeftRightRTL} from '../../components/Resumes';
import Portfolio from '../../components/Inputs/Portfolio';
import Accordion from '../../components/Accordion/Accordion';
import axios from 'axios';
import { Redirect } from 'react-router';


// import moment from 'moment';

class InputPage extends Component {
    state = {
      contact: this.props.currentUser.contact,
      education:this.props.currentUser.education,
      experience: this.props.currentUser.experience,
      skills: this.props.currentUser.skills,
      portfolio: this.props.currentUser.portfolio,
      success: false,
      resumeSuccess: false,
      html: '',
      selectButton:'',
      currentTemplate: this.props.selectedTemplate,
      currentUser: this.props.currentUser,
      type: this.props.type
  }


  prepareStateHandler = (event, id, field, subfield) => {
    if (field === 'contact') {
      const contact = {...this.state.contact};
      contact[subfield] = event.target.value;
      this.setState({contact});
      window.sessionStorage.setItem('contact'+subfield,event.target.value);
    }
    else {
      const fieldState = [...this.state[field]] ? [...this.state[field]] : [];
      const inputIndex = this.state[field].findIndex(input => {
        return input.id === id;
      });
      const fieldObj = this.state[field][inputIndex] ? {
        ...this.state[field][inputIndex]
      } : {id};

      fieldObj[subfield] = event.target.value;

      !fieldState[inputIndex] ? fieldState.push(fieldObj) : fieldState[inputIndex]=fieldObj;
      this.setState({[field]: fieldState})

      window.sessionStorage.setItem(id+subfield,event.target.value);
    }

  }
  
  submitFormHandler = (html) => {   
    //console.log(html);
    localStorage.setItem('html', html);
    // if resume, write state to db. write html to resume.html file then create resume.pdf for optional download
    if (this.props.type === "resume") {
        // write whatever state to user db profile
        axios.post('/api/create', this.state)
        .then((response) => {
          response.data === 'success' ? console.log("user info saved to db") : console.log("error writing to db");         
        })
        .then((response) => {
          axios.post('/api/resume', {html:html})
          .then((response) => {
            response.data === "success" ? console.log("html created"): console.log("error creating html");
          }).then((response) => {
              axios.post('/api/createpdf')
              .then((response) => {
                response.data === "success" ? this.setState({resumeSuccess:true}) : console.log("error creating pdf");
              })
            }) 
        })
        .catch((err) => {
          console.log(err)
        }); 
    } else {
        console.log("site");
        // write whatever state to user db profile
        return this.state.currentUser.login === 'guest' ? this.setState({success:true}) :
        axios.post('/api/create', this.state)
        .then((response) => {
          console.log("axios: ", response)
          response.data==='success' ? this.setState({success:true}): console.log('failed')
        })
        .catch((err) => {
          console.log(err)
        });   
    };  
  }

  render() {
    let accessToken = localStorage.getItem('accessToken')
                      ? localStorage.getItem('accessToken') : '';
                      console.log(this.state.currentUser)
    if ((!accessToken && !this.state.currentUser) || Object.keys(this.state.currentTemplate).length === 0) {
      return <Redirect to={'/noMatch'} />
    }
    //Logic to render input fields
    const inputs = 
        this.props.selectedTemplate && this.props.selectedTemplate.inputs ? Object.keys(this.props.selectedTemplate.inputs).map((inputType, i) => {
          return [...Array(this.props.selectedTemplate.inputs[inputType])].map((_, i) => {
            switch (inputType) {
              case ('education'):
                return <Education key={inputType + i} index={i} id={inputType+i} changed={this.prepareStateHandler} education={this.state.education}/>
              case ('skills'):
                return <Skills key={inputType + i} index={i} id={inputType+i} changed={this.prepareStateHandler} skills={this.state.skills}/>
              case ('experience'):
                return <Experience key={inputType + i} index= {i} id={inputType+i} changed={this.prepareStateHandler} experience={this.state.experience}/>
              case ('portfolio'):
                return <Portfolio key={inputType + i} index= {i} id={inputType+i} changed={this.prepareStateHandler} portfolio={this.state.portfolio} />
              default:
                return '';
            }
          })
          
      }) : [];

    const education = inputs.slice(1,2);
    const skills = inputs.slice(2,3);
    const portfolio = inputs.slice(3,4);
    const experience = inputs.slice(0,1);

    const currentTemplate = this.props.selectedTemplate.title;

    let selectButton = '';
    const props = {};
    props.education = this.state.education;
    props.experience= this.state.experience;
    props.skills= this.state.skills;
    props.contact= this.state.contact;
    props.portfolio= this.state.portfolio;
    props.clicked= this.submitFormHandler; 

    switch (currentTemplate){
      case "Montreal":
            selectButton = <Montreal {...props }/>;
            break;
      case "Lawrence":
            selectButton = <Lawrence {...props} />
            break;
      case "London":
            selectButton = <London {...props} />
            break;
      case "Oslo":
            selectButton = <Oslo {...props} />
            break;
      case "resume-left-right-rtl":
            selectButton = <ResumeLeftRightRTL {...props} />;
            break;   
      default:
            break;
    }

    if (this.state.success) {
      return (
        <Redirect to={'/success'}/>
      )
    } else if (this.state.resumeSuccess) {
        return (
          <Redirect to={'/resumeSuccess'}/>
        )
    }
      return (
        <Aux>
          <BaseInput key={'base'} changed={this.prepareStateHandler} contact={this.state.contact}/>
          <div id="accordion" role="tablist" aria-multiselectable="true">
              { (education[0] && education[0].length>0) ? <Accordion type="education" i='0'>{education}</Accordion> : ''}
              { (experience[0] && experience[0].length>0) ? <Accordion type="experience" i='1'>{experience}</Accordion> : ''}
              { (skills[0] && skills[0].length>0) ? <Accordion type="skills" i='2'>{skills}</Accordion> : ''}
              { (portfolio[0] && portfolio[0].length>0) ? <Accordion type="portfolio" i='3'>{portfolio}</Accordion> : ''}
          </div>
          <div className="text-center">
            {selectButton}
          </div>
        </Aux>
      )
    }
  }

export default InputPage;