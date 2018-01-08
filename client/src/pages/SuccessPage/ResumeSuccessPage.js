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
        <button className="btn btn-success" type="button" onClick={retrieveResume} data-toggle="modal" data-target="#viewPDFModal"> Download PDF </button>
        <button className="btn btn-warning" type="button"  data-toggle="modal" data-target="#viewPDFModal"> Open Modal </button>        
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

    <div className="modal fade" id="viewPDFModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ResumeSuccessPage;