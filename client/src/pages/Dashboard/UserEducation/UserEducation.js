import React from 'react';
import Education from '../../../components/Inputs/Education';

const UserEducation = ({changed, education, updateUserInputs}) => {
  return (
  <div style={{textAlign:'center'}}>
    <div>
        <Education
        changed={changed}
        index={0}
        id={'education0'}
        education={education} />
        <Education
        changed={changed}
        index={1}
        id={'education1'}
        education={education} />
      </div>
    <div>
        <Education
        changed={changed}
        index={2}
        id={'education2'}
        education={education} />
        <Education
        changed={changed}
        index={3}
        id={'education3'}
        education={education} />
    </div>
      <div>
        <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
      </div>
  </div>
  )
}

export default UserEducation;