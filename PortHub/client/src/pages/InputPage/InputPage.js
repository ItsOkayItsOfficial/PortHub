import React from 'react';
import Aux from '../../HOCs/Aux';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';
import Skills from '../../components/Inputs/Skills';
import Experience from '../../components/Inputs/Experience';
import NoMatch from '../../pages/NoMatch/NoMatch';

const InputPage = ({ selectedTemplate }) => {
  const inputs = 
    selectedTemplate && selectedTemplate.inputs ? Object.keys(selectedTemplate.inputs).map((inputType, i) => {
        return [...Array(selectedTemplate.inputs[inputType])].map((_, i) => {
            switch (inputType) {
              case ('education'):
                return <Education key={inputType + i} index={i}/>
                break;
              case ('skills'):
                return <Skills key={inputType + i} />
                break;
              case ('experience'):
                return <Experience key={inputType + i}/>
                break;
            }
        });
  }) : [];
  const renderedInputs = selectedTemplate.inputs ? [<BaseInput />, ...inputs] : <NoMatch />
  return (
    <Aux>
      {renderedInputs}
    </Aux>
  )
}

export default InputPage;