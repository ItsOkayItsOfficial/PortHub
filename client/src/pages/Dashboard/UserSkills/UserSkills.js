import React from 'react';
import Skills from '../../../components/Inputs/Skills';
import Aux from '../../../components/Auxiliary/Auxiliary';

const UserSkills = ({changed, skills, updateUserInputs}) => {

  return (
    <Aux>
  <div className='d-flex flex-wrap justify-content-center'style={{textAlign:'center'}}>
        <Skills
        changed={changed}
        index={0}
        id={'skills0'}
        skills={skills} />
        <Skills
        changed={changed}
        index={1}
        id={'skills1'}
        skills={skills} />
        <Skills
        changed={changed}
        index={2}
        id={'skills2'}
        skills={skills} />
        <Skills
        changed={changed}
        index={3}
        id={'skills3'}
        skills={skills} />
        <Skills
        changed={changed}
        index={4}
        id={'skills4'}
        skills={skills} />
        <Skills
        changed={changed}
        index={5}
        id={'skills5'}
        skills={skills} />
        <Skills
        changed={changed}
        index={6}
        id={'skills6'}
        skills={skills} />
        <Skills
        changed={changed}
        index={7}
        id={'skills7'}
        skills={skills} />
        <Skills
        changed={changed}
        index={8}
        id={'skills8'}
        skills={skills} />
  </div>
  <div style={{textAlign:'center'}}>
    <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
  </div>
  </Aux>
  )
}

export default UserSkills;