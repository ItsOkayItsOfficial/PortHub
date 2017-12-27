import React from 'react';
import './CreateSiteSuccess.css';

const CreateSiteError = ({ login, file }) => {
  return (
    <div className='d-flex flex-column p-2 justify-content-center align-items-center successContent'>
        <h1 className='p-2 successHeader'>Sorry about that..</h1>
        <iframe title='404' src="https://giphy.com/embed/MQ4gUFfumJppm" width="240" height="360" frameBorder="0" className="giphy-embed m-0" allowFullScreen></iframe><p></p>
        <h4>An error occured while trying to make your site! Our bad. Please choose an option below to restart</h4>
        <div className='flex-row'>
          <a href='/createsite' className="btn btn-warning successButton">Create a Portfolio Website</a>
          <a href='/createresume' className="btn btn-info successButton">Create a Resume</a>
        </div>
    </div>
  )
}

export default CreateSiteError;