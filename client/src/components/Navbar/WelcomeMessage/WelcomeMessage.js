import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeMessage.css';
import { Redirect } from 'react-router';

const WelcomeMessage = ({user, logout, loggedIn, reset}) => {
  const dropdownStyle = user.login === 'guest' ? {left: '-500%', zIndex:'1001'} : {left: '-126%', zIndex:'1001'};
  return (
    loggedIn ? <div className='welcomeContainer'>
      <p className='welcomeText'> Welcome, {user ? user.login : ''} </p>
      <li className="nav-item dropdown"> 
        <a className="nav-link dropdown-toggle" id="navBarDropdown" href='#dropdown' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.login === 'guest' ? '' : <img src={user ? user.avatar_url : ''} alt='user' />}
        </a>
        <div className="dropdown-menu pull-left" style={dropdownStyle}>
          {user.login === 'guest' ? '' : <Link to='/dashboard' onClick={reset} className="dropdown-item" >Dashboard</Link>}
          <Link to='/' className="dropdown-item" onClick={logout}>Logout</Link>
        </div>
      </li>
    </div> : <Redirect to='/' />
  )
}

export default WelcomeMessage;