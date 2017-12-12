import React from "react";
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './LoginPage.css';

const LoginPage = ({ children }) =>
<div>
  <Navbar />
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> Login </p>
  </Jumbtron>

</div>
export default LoginPage;
