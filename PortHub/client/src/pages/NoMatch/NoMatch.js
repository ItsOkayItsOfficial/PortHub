import React from "react";
import Jumbtron from '../../components/Jumbotron';
import   './NoMatch.css';

const NoMatch = ({ children }) =>
<div>
  <div className='jumbotron-contents'>
    <img src='/assets/images/ph/porthub_logo.png' alt="logo" />       
    <p style={{color:'red', textShadow:'none'}}> oh snap! 404 Page not found </p>
  </div>

</div>
export default NoMatch;
