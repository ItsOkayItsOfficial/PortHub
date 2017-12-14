import React, { Component } from 'react';
import Aux from '../../HOCs/Aux';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';
import NoMatch from '../../pages/NoMatch/NoMatch';

class InputPage extends Component{
  constructor(props) {
    super(props);
  }
  state ={
    contact: {},
    education: []
  }

  prepareEduStateHandler = (event, id, field) => {
    const education = [...this.state.education];
    const inputIndex = this.state.education.findIndex(input => {
      return input.id === id;
    });
    const eduObj = this.state.education[inputIndex] ? {
      ...this.state.education[inputIndex]
    } : {id};
    eduObj[field] = event.target.value;

    !education[inputIndex] ? education.push(eduObj) : education[inputIndex]=eduObj;
    this.setState({education})
  }
  
  render() {
      const inputs = 
        this.props.selectedTemplate && this.props.selectedTemplate.inputs ? Object.keys(this.props.selectedTemplate.inputs).map((inputType, i) => {
            return [...Array(this.props.selectedTemplate.inputs[inputType])].map((_, i) => {
                switch (inputType) {
                  case ('education'):
                    return <Education key={inputType + i} index={i} id={inputType+i} changed={this.prepareEduStateHandler}/>
                  case ('skills'):
                    return <Skills key={inputType + i} />
                  case ('experience'):
                    return <Experience key={inputType + i}/>
                  default:
                    return null;
                }
            });
      }) : [];
      const renderedInputs = this.props.selectedTemplate.inputs ? [<BaseInput key={'base'}/>, ...inputs] : <NoMatch />
      return (
        <Aux>
          {renderedInputs}
        </Aux>
      )
    }
  }


export default InputPage;