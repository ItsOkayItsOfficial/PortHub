import React from 'react';
import Experience from '../../../components/Inputs/Experience';

const UserExperience = ({changed, experience, updateUserInputs}) => {

  return (
  <div style={{textAlign:'center'}}>
    <div>
        <Experience
        changed={changed}
        index={0}
        id={'experience0'}
        experience={experience} />
        <Experience
        changed={changed}
        index={1}
        id={'experience1'}
        experience={experience} />
      </div>
    <div>
        <Experience
        changed={changed}
        index={2}
        id={'experience2'}
        experience={experience} />
        <Experience
        changed={changed}
        index={3}
        id={'experience3'}
        experience={experience} />
    </div>
      <div>
        <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
      </div>
  </div>
  )
}

export default UserExperience;