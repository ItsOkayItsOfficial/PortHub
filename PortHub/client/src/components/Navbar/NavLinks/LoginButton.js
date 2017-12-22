import React from 'react';
import { Link } from 'react-router-dom';


const LoginButton = () => {
  return (
      <Link to='/login'><div className='btn btn-outline-success'>
        Login
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div></Link>
  )
}

export default LoginButton;