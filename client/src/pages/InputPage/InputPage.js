import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Aux from '../../components/Auxiliary/Auxiliary';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';
import {Montreal, Lawrence, London, Oslo} from '../../components/Websites';
import {ResumeLeftRightRTL, ResumeLeftRight, ResumeMaterialDark, ResumeSideBar, ResumeSideBarRTL, ResumePurple, ResumeOblique} from '../../components/Resumes';
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
    currentUser: this.props.currentUser.login,
    type: this.props.type
  }

  //Creates user input state with two way binding from input components
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

      subfield === 'rating' ? fieldObj[subfield] = event : fieldObj[subfield] = event.target.value;

      !fieldState[inputIndex] ? fieldState.push(fieldObj) : fieldState[inputIndex]=fieldObj;
      this.setState({[field]: fieldState})

      subfield === 'rating' ? window.sessionStorage.setItem(id+subfield,event) : window.sessionStorage.setItem(id+subfield,event.target.value);
    }

  }
  
  submitFormHandler = (html) => {   

    localStorage.setItem('html', html);
    // if resume, update users inputs in database write html to resume.html file then create resume.pdf for optional download
    if (this.props.type === "resume") {
    //if user is a guest do not create template in Database
      if (this.state.currentUser === 'guest') {
        console.log('guest')
          return axios.post('/resume', {html:html, type:this.state.type, currentTemplate:this.state.currentTemplate.title, login:this.state.currentUser})
          .then((response) => {
            console.log('resume response', response);
          return axios.post('/createpdf')
          })
          .then((response) => {
            return response.data === "success" ? this.setState({resumeSuccess:true}) : console.log("error creating pdf");
          })
          .catch((err) => {
            console.log(err);
          })     
      }
      else {
        // Create template for valid user in Database
        axios.post('/create', this.state)
          .then((response) => {
            return response.data === 'success' ? "user info saved to db" : "error writing to db";         
          })
          .then((response) => {
            return response === 'error writing to db' ? console.log('error saving user info')
            :
            axios.post('/resume', {html:html, img:this.state.currentTemplate.img, type:this.state.type, currentTemplate:this.state.currentTemplate.title, login:this.state.currentUser})
          })
          .then((response) => {            
            return axios.post('/createpdf', {html:html})
          }) 
          .then((response) => {
            return response.data === "success" ? this.setState({resumeSuccess:true}) : console.log("error creating pdf");    
          })
          .catch((err) => {
            console.log(err)
          }); 
      }
    } 
    //if User is creating a website
    else {
      //if user is a guest, send them to success page. If not a guest, update users inputs and create template in DB
      return this.state.currentUser === 'guest' ? this.setState({success:true}) :
      axios.post('/create', this.state)
      .then((response) => {
      return axios.post('/site', {html:html, img:this.state.currentTemplate.img, type:this.state.type, currentTemplate:this.state.currentTemplate.title, login:this.state.currentUser})
      })
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
    //Redirects user if they successfully created a site or resume, respectively.
    if (this.state.success) {
      return (
        <Redirect to={'/success'}/>
      )
    } else if (this.state.resumeSuccess) {
      return (
          <Redirect to={'/resumeSuccess'}/>
        )
    }
    //If there is no accessToken and no current user, or if no template is chosen, redirects to 404 page
    let accessToken = localStorage.getItem('accessToken')
                      ? localStorage.getItem('accessToken') : '';
    if ((!accessToken && !this.state.currentUser) || Object.keys(this.state.currentTemplate).length === 0) {
      return <Redirect to={'/noMatch'} />
    }
    //Logic to dynamically render input fields based on chosen template
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
      case "resume-left-right":
            selectButton = <ResumeLeftRight {...props} />;
            break; 
      case "resume-material-dark":
            selectButton = <ResumeMaterialDark {...props} />;
            break; 
      case "resume-side-bar":
            selectButton = <ResumeSideBar {...props} />;
            break; 
      case "resume-side-bar-rtl":
            selectButton = <ResumeSideBarRTL {...props} />;
            break; 
      case "resume-purple":
            selectButton = <ResumePurple {...props} />;
            break; 
      case "resume-oblique":
            selectButton = <ResumeOblique {...props} />;
            break;                                                                           
      default:
            break;
    }

      return (
        <Aux>
          <BaseInput key={'base'} changed={this.prepareStateHandler} contact={this.state.contact} button={selectButton}/>
          <div id="accordion" role="tablist" aria-multiselectable="true">
              { (education[0] && education[0].length>0) ? <Accordion type="education" i='0'>{education}</Accordion> : ''}
              { (experience[0] && experience[0].length>0) ? <Accordion type="experience" i='1'>{experience}</Accordion> : ''}
              { (skills[0] && skills[0].length>0) ? <Accordion type="skills" i='2'>{skills}</Accordion> : ''}
              { (portfolio[0] && portfolio[0].length>0) ? <Accordion type="portfolio" i='3'>{portfolio}</Accordion> : ''}
          </div>
          <div className="text-center mt-3">
            {selectButton}
          </div>
        </Aux>
      )
    }
  }

export default InputPage;