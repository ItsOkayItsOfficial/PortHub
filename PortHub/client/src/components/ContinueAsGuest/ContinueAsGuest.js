import React from 'react';
import Jumbotron from  '../../components/Jumbotron/Jumbotron';
import { Link } from 'react-router-dom';
import './ContinueAsGuest.css';

const ContinueAsGuest = ({closeModal}) => {
  return (
    <div className="CAGcontainer container">
      <div className='row justify-content-center'>
          <img src='/assets/images/ph/porthub_logo.png' alt="logo" /> 
      </div>
        <div className='row align-items-center center-block' style={{height:'75%'}}>
          <div className="CAGcol col-sm-6 border border-dark border-left-0 border-bottom-0 border-top-0 " style={{boxShadow:'none'}}>
            <h5 style={{textAlign:'center'}}>Login with Github </h5>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Download PDF's and generate HTML of portfolio sites.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Publish your portfolio sites to your own webpage.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Save your history to download past resumes and view all of your portfolios.</p>
              </div>
            </div>
            <div className='row CAGbuttons'>
              <button className="btn btn-success">
                Login<i style={{marginLeft:'10px'}} className="fa fa-github-alt" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="CAGcol col-sm-6">
            <h5 style={{textAlign:'center'}}> Don't have an account? </h5>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Download PDF's and generate HTML of portfolio sites.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-close" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Publish your portfolio sites to your own webpage.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1'>
                <i className="fa fa-close" aria-hidden="true"></i>
              </div>
              <div className='col-md-11'>
                <p>Save your history to download past resumes and view all of your portfolios.</p>
              </div>
            </div>
            <div className='row CAGbuttons'>
              <Link to='/inputPage'><button onClick={closeModal} className="btn btn-primary">Continue as guest</button></Link>
            </div>
          </div>
        </div>
    </div>

  )
}

export default ContinueAsGuest;