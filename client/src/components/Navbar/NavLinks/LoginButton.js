import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.css';


const LoginButton = () => {
  return (
      <Link to='/login'><div className='btn btn-outline-success' id='loginButton'>
        Login
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div></Link>
  )
}

export default LoginButton;