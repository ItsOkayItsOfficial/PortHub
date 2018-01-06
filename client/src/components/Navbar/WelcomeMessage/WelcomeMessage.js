import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeMessage.css';

const WelcomeMessage = ({user, logout}) => {
// To DO- Redirect on click to user dashboard
  return (
    <div className='welcomeContainer'>
      <p className='welcomeText'> Welcome, {user ? user.login : ''} </p>
      <li className="nav-item dropdown"> 
        <a className="nav-link dropdown-toggle" id="navBarDropdown" href='#dropdown' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user ? user.avatar_url : ''} alt='user' />
        </a>
        <div className="dropdown-menu pull-left" style={{left:'-126%', zIndex:'1001'}}>
          <Link to='/dashboard' className="dropdown-item" >Dashboard</Link>
          <a className="dropdown-item" href='#dropdown' onClick={logout}>Logout</a>
        </div>
      </li>
    </div>
  )
}

export default WelcomeMessage;