import React from 'react';
import Aux from '../../HOCs/Aux';
import BaseInput from '../../components/Inputs/BaseInput';
import Education from '../../components/Inputs/Education';

const InputPage = (props) => {
  return (
    <Aux>
      <BaseInput />
      <h3> Education: </h3>
      <Education />
    </Aux>
  )
}

export default InputPage;