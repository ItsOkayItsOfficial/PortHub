import React from 'react';

const SuccessScreen = ({ redirect }) => {
  return (<div> <h1>Success! </h1>
    <button onClick={redirect} className='btn btn-success'> Publish to github? </button>
  </div>
  )
}

export default SuccessScreen;