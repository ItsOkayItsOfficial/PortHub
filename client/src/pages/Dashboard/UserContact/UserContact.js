import React from 'react';
import BaseInput from '../../../components/Inputs/BaseInput';

const UserContact = ({changed, contact, updateUserInputs}) => {
  return (
  <div style={{textAlign:'center'}}>
      <BaseInput
      contact={contact}
      changed={changed}
      dashboard={true} />
      <div>
        <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
      </div>
  </div>
  )
}

export default UserContact;