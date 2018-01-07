import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './SuccessPage.css';

const ResumeSuccessPage = ({ redirect, currentUser, currentTemplate, retrieveResume }) => {

  return (
  <div className='container successWrapper'>
    <h1 style={{margin: '10px'}}>Success!</h1> 
    <div className='row'>
      <div className='col-lg-6'>
        <h4>Access your brand new resume as a PDF:</h4>
        <a href="/assets/tmp/newResume.pdf" download="newResume.pdf" className="btn btn-primary" target="blank">download</a>
        <button className="btn btn-success" type="button" onClick={retrieveResume}> Download PDF </button>
      </div>
      {currentUser.login === 'guest' ? null : 
      <div className='col-lg-6'>
        <h4>Publish your site to GitHub Pages</h4>
          <ul>
            <li>Host your site on GitHub to get a free, fully functional portfolio site. </li>
            <li>Customize your site further and add those changes to GitHub to see your site change in real time.</li>
            <li>What we'll do:
                <ol>
                    <li><small>Create a GitHub repository named yourAccountName.github.io. (if you don't already have one) </small></li>
                    <li><small>Insert your new portfolio into the repository. </small></li>
                    <li><small>?????</small></li>
                    <li><small>And that's it, your portfolio will be up and running for future employers to marvel over.</small></li>
                </ol>
            </li>
          </ul>
        <div className='row' style={{textAlign:'center'}} >
          <Link to={'/siteLoader'} style={{margin: 'auto'}}><button className='btn btn-success'> Publish to GitHub </button></Link>
        </div>
      </div>}
    </div>
  </div>
  )
}

export default ResumeSuccessPage;