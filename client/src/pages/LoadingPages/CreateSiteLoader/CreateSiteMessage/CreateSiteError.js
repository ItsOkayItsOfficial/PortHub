import React from 'react';
import './CreateSiteSuccess.css';

const CreateSiteError = ({ login, file }) => {
  return (
    <div className='d-flex flex-column p-2 justify-content-center align-items-center successContent'>
        <h1 className='p-2 successHeader'>Sorry about that..</h1>
        <iframe title='404' src="https://giphy.com/embed/MQ4gUFfumJppm" width="240" height="360" frameBorder="0" className="giphy-embed m-0" allowFullScreen></iframe><p></p>
        <h4>An error occured while trying to make your site! Our bad. Please choose an option to restart</h4>

        <div className="row w-100 w-100 d-flex flex-row justify-content-center">
                    {/* Buttons */}
                    <div id='buttons' className="row mx-auto d-flex flex-row justify-content-around" style={{top:"auto"}}>
                          <div className="col-lg-4 col-sm-8 d-flex text-center">
                            <a href='/createsite' className="btn btn-warning mx-4 w-100 d-md-block btn-landingPage">Create a Portfolio Website</a>
                          </div>
                          <div className="col-lg-4 col-sm-8 d-flex text-center">
                              <a href='/createresume' className="btn btn-info mx-4 w-100 d-md-block btn-landingPage">Create a Resume</a>
                          </div>
                    </div>              
                </div>
        </div>
  )
}

export default CreateSiteError;