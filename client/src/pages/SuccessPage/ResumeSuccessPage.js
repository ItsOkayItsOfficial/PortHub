import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './SuccessPage.css';

const ResumeSuccessPage = ({ redirect, currentUser, currentTemplate, retrieveResume, currentTemplateID }) => {
  console.log("retrievePDF:" + currentTemplateID);
   let retrievePDF_URL="http://localhost:3003/api/retrievePDF/" + currentTemplateID;
  //let retrievePDF_URL="https://porthubserver.herokuapp.com/api/retrievePDF/" + currentTemplateID;  
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  if ((!accessToken && !currentUser) || Object.keys(currentTemplate).length === 0) {
    return <Redirect to={'/noMatch'} />
  }

  return (
  <div className='container successWrapper successFontSize'>

    <div id='info' className="row p-4 m-0">
          <div className="row w-100 d-flex justify-content-center moreInfo-title">Success! What's Next?</div>
          <div className="row w-100 d-flex justify-content-around">
                <div className="col-lg-6 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                      <p className="m-0 mb-2"><i className="fa fa-file-text fa-3x"></i></p>
                      <p className="m-0 mb-2">Download and View</p>
                      <p className="mt-4 text-align-right">Download a PDF version of your new resume to view.  Feel free to print out a hardcopy to handoff to employers or save it for your personal use.</p>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                      <p className="m-0 mb-2"><i className="fa fa-globe fa-3x"></i></p>
                      <p className="m-0 mb-2">Save your resume to GitHub</p>
                      <p className="mt-4 text-align-right">Did you know you can publish your resume to your GitHub account? Get a LIVE URL to share it with anyone.</p>
                </div>
          </div>
          <div className="row w-100 d-flex justify-content-around">
              <div className="col-lg-6 m-0 p-0 text-center moreInfo-item">
                    <button className="btn btn-success" onClick={retrieveResume} type="button" data-toggle="modal" data-target="#viewPDFModal">View Resume</button>
              </div>
              <div className="col-lg-6 m-0 p-0 text-center moreInfo-item">
                    <Link to={'/siteLoader'} style={{margin: 'auto'}}><button className='btn btn-success'> Publish to GitHub </button></Link>          
              </div>
          </div>
    </div>

    <div className="modal fade bd-example-modal-lg" id="viewPDFModal" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{backgroundImage:"url('/assets/images/ph/porthub_breath.gif')", backgroundColor:"#333444", backgroundRepeat:"no-repeat", backgroundPosition:"50% 50%"}}> 
            <iframe alt={currentTemplate.title} src={retrievePDF_URL} title={currentTemplate.title} 
                      style={{width:'100%', height:'90vh'}} name="iframeForPDF">

        </iframe>   
        </div>
      </div>
    </div>

  </div>
  )
}

export default ResumeSuccessPage;