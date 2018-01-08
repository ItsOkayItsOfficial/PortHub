import React from 'react';
import { Redirect } from 'react-router';
import './AuthLoader.css';
import '../loading.css'

const AuthLoader = ({ currentUser, authenticated, authHandler }) => {
  if (!authenticated) {
    authHandler()
  }
  return !authenticated ? <div className='loadContainer'>
        <div className="ld ld-bounce">
          <img src="https://raw.githubusercontent.com/ItsOkayItsOfficial/project3/app/client/public/assets/images/ph/porthub_icon.png" alt='porthub'className='loadImg'/>
        </div>
      </div> : <Redirect to='/' />
}

export default AuthLoader;