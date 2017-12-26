import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';

const ResumeSuccessScreen = ({ redirect }) => {
  const html = localStorage.getItem('html');
  // let accessToken = localStorage.getItem('accessToken')
  //                   ? localStorage.getItem('accessToken') : '';
  // if (!accessToken) {
  //   return <Redirect to={'/noMatch'} />
  // }
  return (
  <div className='container successWrapper'>
    <h1 style={{margin: '10px'}}>Success!</h1> 
    <div className='row'>
      <div className='col-lg-6'>
      <h4>Access your brand new resume as a PDF:</h4>

      <Link to="/api/download" className = "btn btn-primary">Download</Link>
      </div>
      <div className='col-lg-6'>
        <h4>Publish your Resume Page to GitHub Pages</h4>
          <ul>
            <li>Host your resume on GitHub to get a free, fully functional 1 page web site. </li>
            <li>Customize your site further and add those changes to GitHub to see your site change in real time.</li>
            <li>What we'll do:
                <ol>
                    <li><small>Create a GitHub repository named yourAccountName.github.io. (if you don't already have one) </small></li>
                    <li><small>Insert your new portfolio into the repository. </small></li>
                    <li><small>?????</small></li>
                    <li><small>And that's it, your resume will be up and running for future employers to marvel over.</small></li>
                </ol>
            </li>
            <li> Don't have a Github account? Create one <a href='https://github.com/' rel="noopener noreferrer" target='_blank'> here </a></li>
          </ul>
        <div className='row' style={{textAlign:'center'}} >
          <Link to={'/siteLoader'}><button style={{margin: 'auto'}}className='btn btn-success'> Publish to GitHub </button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResumeSuccessScreen;