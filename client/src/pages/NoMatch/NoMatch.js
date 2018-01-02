import React from "react";
import   './NoMatch.css';

const NoMatch = ({ children }) =>
<div>
  <div className='jumbotron-contents'>
    <img src='/assets/images/ph/porthub_logo.png' alt="logo" />       
    <p style={{color:'red', textShadow:'none'}}> oh snap fool! 404 Page not found </p>
    <iframe title='404' src="https://giphy.com/embed/MQ4gUFfumJppm" width="240" height="360" frameBorder="0" className="giphy-embed m-0" allowFullScreen></iframe><p></p>
  </div>

</div>
export default NoMatch;
