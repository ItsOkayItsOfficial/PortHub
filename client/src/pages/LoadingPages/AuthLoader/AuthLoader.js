import React from 'react';
import Keys from '../../../keys/keys';
import axios from 'axios';
import './AuthLoader.css';
import '../loading.css'

const AuthLoader = ({ getUserInfo, authenticated }) => {
  localStorage.clear('accessToken');
  let accessToken = '';
  const getAuthCode = () => {
    accessToken === 'ification_code' ? localStorage.clear() : '';
    return window.location.href.match(/[&?]code=([\w/-]+)/) ? window.location.href.match(/[&?]code=([\w/-]+)/)[1] 
    : '';
  }
  const authenticateUser = () => {
   axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id=' 
      + Keys.localClientId + '&client_secret=' + Keys.localClientSecret + '&code=' + getAuthCode())
      .then(response => {
        console.log('finished authenticating')
        accessToken = response.data.slice(13, response.data.indexOf('&'));
        localStorage.setItem('accessToken', accessToken);
        window.location.replace('/');
      })
      .catch(error => {
        return 'error';
      })
  }
  authenticateUser();
    return (
        <div className='loadContainer'>
          <div className="ld ld-bounce">
            <img src="https://raw.githubusercontent.com/ItsOkayItsOfficial/project3/app/client/public/assets/images/ph/porthub_icon.png" alt='porthub'className='loadImg'/>
          </div>
        </div>
    )
}

export default AuthLoader;