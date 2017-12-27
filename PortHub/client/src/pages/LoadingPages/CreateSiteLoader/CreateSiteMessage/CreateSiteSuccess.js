import React from 'react';
import { Link } from 'react-router-dom';


const CreateSiteMessage = ({ login, file }) => {
  return (
    <div className='d-flex flex-column p-2 justify-content-center'>
        <h1 className='p-2'> Congratulations! </h1>
        <p> Your new personal portfolio site is now hosted at <a href={`https://www.${login}.github.io/${file}`} target='_blank'>{`www.${login}.github.io/${file}`}</a>. However, it may take a few minutes to appear.</p>
        <h3> What would you like to do now? </h3>
          <div className='flex-row justify-content-center'>
          <a href='/createsite' className="btn btn-warning">Create a Portfolio Website</a>
          <a href='/createresume' className="btn btn-info">Create a Resume</a>
          </div>
    </div>

  )
}

export default CreateSiteMessage;