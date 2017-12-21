import React from 'react';
import './SuccessPage.css';

const SuccessScreen = ({ redirect }) => {
  const html = localStorage.getItem('html');
  return (
  <div className='container successWrapper'>
    <h1 style={{margin: '10px'}}>Success!</h1> 
    <div className='row'>
      <div className='col-lg-6'>
      <h4>Here's the HTML of your brand new site:</h4>
        <ul>
          <li> All CSS is loaded for you, no external stylesheet is necessary! (but feel free to customize) </li>
          <li> Follow the href in the link tag labeled "Custom CSS" to find the raw CSS. </li>
        </ul>
      <textarea className='htmlField' defaultValue={html}></textarea>
      </div>
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
            <li> Don't have a Github account? Create one <a href='https://github.com/' target='_blank'> here </a></li>
          </ul>
        <div className='row' style={{textAlign:'center'}} >
          <button onClick={redirect} style={{margin: 'auto'}}className='btn btn-success'> Publish to GitHub </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SuccessScreen;