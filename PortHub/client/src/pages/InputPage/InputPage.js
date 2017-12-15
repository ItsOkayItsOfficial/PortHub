import React, { Component } from 'react';
import Aux from '../../HOCs/Aux';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';
import NoMatch from '../../pages/NoMatch/NoMatch';
import Montreal from '../../components/Websites/Montreal';
import Portfolio from '../../components/Inputs/Portfolio';
import Modal from '../../components/Modal/Modal';
import SuccessScreen from '../../pages/InputPage/SuccessScreen/SuccessScreen'

class InputPage extends Component{

  state ={
    contact: {},
    education:[],
    experience: [],
    skills: [],
    portfolio: [],
    viewSuccessScreen: false,
    html: ''
  }

  prepareStateHandler = (event, id, field, subfield) => {
    if (field === 'contact') {
      const contact = {...this.state.contact};
      contact[subfield] = event.target.value;
      this.setState({contact})
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
    }
  }
  
  submitFormHandler = (html) => {
    console.log(html);
    this.setState({html, viewSuccessScreen: true});
  }
  render() {
      const inputs = 
        this.props.selectedTemplate && this.props.selectedTemplate.inputs ? Object.keys(this.props.selectedTemplate.inputs).map((inputType, i) => {
            return [...Array(this.props.selectedTemplate.inputs[inputType])].map((_, i) => {
                switch (inputType) {
                  case ('education'):
                    return <Education key={inputType + i} index={i} id={inputType+i} changed={this.prepareStateHandler}/>
                  case ('skills'):
                    return <Skills key={inputType + i} index={i} id={inputType+i} changed={this.prepareStateHandler} />
                  case ('experience'):
                    return <Experience key={inputType + i} index= {i} id={inputType+i} changed={this.prepareStateHandler}/>
                  case ('portfolio'):
                    return <Portfolio key={inputType + i} index= {i} id={inputType+i} changed={this.prepareStateHandler} />
                  default:
                    return null;
                }
            });
      }) : [];
      const renderedInputs = this.props.selectedTemplate.inputs ? 
                             [<BaseInput key={'base'} changed={this.prepareStateHandler}/>,
                              ...inputs] 
                             : <NoMatch />
      return (
        <Aux>
          {renderedInputs}
          <Modal show={this.state.viewSuccessScreen} modalType='success'>
            <SuccessScreen />
          </Modal>
          <Montreal education={this.state.education}
                    experience={this.state.experience}
                    skills={this.state.skills}
                    contact={this.state.contact}
                    portfolio={this.state.portfolio}
                    clicked={this.submitFormHandler}/>
        </Aux>
      )
    }
  }


export default InputPage;