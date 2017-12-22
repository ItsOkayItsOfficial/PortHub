import React from 'react';
import Aux from '../../../HOCs/Aux'
import './WelcomeMessage.css';

const WelcomeMessage = ({user}) => {
// To DO- Redirect on click to user dashboard
  return (
      <div className='welcomeContainer'>
        <p className='welcomeText'> Welcome, {user.login}</p> 
        <li className="nav-item dropdown">  
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user.avatar_url} alt='user' />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
        </div>
        </li>
      </div>
  )
}


  
  //   <div class="dropdown-menu">
  //     <a class="dropdown-item" href="#">Action</a>
  //     <a class="dropdown-item" href="#">Another action</a>
  //     <a class="dropdown-item" href="#">Something else here</a>
  //     <div class="dropdown-divider"></div>
  //     <a class="dropdown-item" href="#">Separated link</a>
  //   </div>
  // </li>
export default WelcomeMessage;