import React from "react";
import Jumbotron from '../../components/Jumbotron';
import  './LoginPage.css';
import ReactTooltip from 'react-tooltip';

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
              <div className="form-group" data-tip='React-tooltip'>
                <label htmlFor="exampleInputEmail">Email address</label>
                <input type="email" disabled data-tip='React-tooltip' className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group" data-tip='React-tooltip'>
                <label htmlFor="exampleInputPassword">Password</label>
                <input type="password" disabled data-tip='React-tooltip' className="form-control" id="exampleInputPassword" placeholder="Password" />
              </div>
              <div className="text-center">
                <button type="submit" title="disabled for this version" disabled onClick={localLogin} className="btn btn-primary">Submit</button>
              </div>
            </form>
            <ReactTooltip> Disabled for this version. </ReactTooltip>
        </div>

    <div className="col-lg-6 mx-auto text-center">
    <button type="submit" onClick={ghRedirect} className="btn btn-success">
      <i className="fa fa-github-alt fa-5x" aria-hidden="true"></i>
      <p> login with your github account</p>
    </button>
    </div>
  </div>
</div>

</div>
export default LoginPage;
