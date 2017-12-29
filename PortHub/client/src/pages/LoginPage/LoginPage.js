import React from "react";
import Jumbotron from '../../components/Jumbotron';
import  './LoginPage.css';

const LoginPage = ({ children, ghRedirect, localLogin }) =>
<div>
  <Jumbotron>
    <img src='/assets/images/ph/porthub_logo.png' alt="logo" />       
    <p> Login </p>
  </Jumbotron>

  <div className="container">
  <div className="row h-100 align-items-center">
    <div className="col-lg-6 border border-dark border-left-0 border-bottom-0 border-top-0" style={{boxShadow:'none'}}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
            <button type="submit" onClick={localLogin} className="btn btn-primary">Submit</button>
        </form>
    </div>
    <div className="col-lg-6 mx-auto">
    <button type="submit" onClick={ghRedirect} className="btn btn-success">
      <i className="fa fa-github-alt fa-5x" aria-hidden="true"></i>
      <p> login with your github account</p>
    </button>
    </div>
  </div>
</div>

</div>
export default LoginPage;
