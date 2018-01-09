import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';

const ResumeSuccessPage = ({ redirect, currentUser, currentTemplate, retrieveResume, currentTemplateID }) => {
  console.log("retrievePDF:" + currentTemplateID);
  let retrievePDF_URL="http://localhost:3003/api/retrievePDF/" + currentTemplateID;
  //retrievePDF_URL = "http://localhost:3003/api/retrievePDF/5a5390384ada34c3d3efdfb7";
  return (
  <div className='container successWrapper'>
    <h1 style={{margin: '10px'}}>Success!</h1> 
    <div className='row'>
      <div className='col-lg-6'>
        <h4>Access your brand new resume as a PDF</h4>
        <a href={retrievePDF_URL} target="iframeForPDF">» lame button 1</a>
        <button className="btn btn-success" onClick={retrieveResume} type="button" data-toggle="modal" data-target="#viewPDFModal">Download PDF</button>
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

    <div className="modal fade bd-example-modal-lg" id="viewPDFModal" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          hello world
        <iframe alt={currentTemplate.title} title={currentTemplate.title} zoom='.4' 
                      style={{width:'100%', height:'90vh'}} name="iframeForPDF"/>  
        </div>
      </div>
    </div>

  </div>
  )
}

export default ResumeSuccessPage;