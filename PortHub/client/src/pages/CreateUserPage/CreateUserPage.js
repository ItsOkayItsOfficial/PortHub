import React from "react";
import Jumbtron from '../../components/Jumbotron';
import Navbar from '../../components/Navbar';
import   './CreateUserPage.css';

const CreateUserPage = ({ children }) =>
<div>
  <Navbar />
  <Jumbtron>
    <img src='/assets/images/porthub_logo.png' alt="logo" />       
    <p> Create a user page</p>
  </Jumbtron>
</div>
export default CreateUserPage;
