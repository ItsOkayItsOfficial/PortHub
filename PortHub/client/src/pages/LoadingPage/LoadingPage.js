import React from 'react';
import Keys from '../../keys/keys';
import axios from 'axios';

const LoadingPage = () => {
  // TO DO--- check for when access token = 'ification_code'
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  let login = localStorage.getItem('login') ? localStorage.getItem('login') : '';
  const generateAuthCode = () => {
    accessToken === 'ification_code' ? localStorage.clear() : '';
    return window.location.href.match(/[&\?]code=([\w\/\-]+)/)[1];
  }

  const authenticateUser = () => {
    return axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id=' 
      + Keys.clientId + '&client_secret=' + Keys.clientSecret + '&code=' + generateAuthCode())
      .then((response) => {
        console.log('finished authenticating')
        accessToken = response.data.slice(13, response.data.indexOf('&'));
        localStorage.setItem('accessToken', accessToken);
        return response.data.indexOf('error')>=0 ? false :
        accessToken 
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const getUserInfo = () => {
    try {
      return axios.get('https://api.github.com/user?access_token=' + accessToken)
              .then((response) => {
                login=response.data.login;
                localStorage.setItem('login', login);
              })
    }
    catch(error) {
      return console.log(error)
    }
  }

  const getUserRepos = () => {
    try {
      return axios.get(`https://api.github.com/users/${login}/repos?access_token=` + accessToken)
            .then((response) => {
              for (let i=0; i< response.data.length; i++) {
                if (response.data[i].name === `${login}.github.io`){
                  return true;
                }
              }
            })
    }
    catch(error) {
      console.log(error)
    }
  }
  const createUserRepo = () => {
    try {
      return axios({
        method: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data:`{"name": "${login}.github.io", "auto_init":true}`,
        processData: false,
        url: 'https://api.github.com/user/repos?access_token=' + accessToken,
        })
        .then((response) => {
          console.log('Repo Created')
        })
      }
    catch(error) {
      return console.log(error);
    }
  }

  const createFile = () => {
    const filename = "testbio7.html";
    const filemessage = "uploading a file";
    const filecontent = localStorage.getItem('html');
    const basecontent = btoa(filecontent);
    const filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';
    accessToken = localStorage.getItem('accessToken');
    const login = localStorage.getItem('login');
    const url = 'https://api.github.com/repos/' + login + '/' + login + '.github.io/contents/' + filename + '?access_token=' + accessToken;
        return axios({
          method: 'put',
          contentType: 'application/json',
          data: filedata,
          url: url
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          return true;
        })
  }

  const createSite = () => {
    getUserInfo().then(() => getUserRepos())
    .then((hasRepo) => hasRepo ? console.log('User already has GH pages repo') : createUserRepo())
    .then(() => createFile())
    .then((fileNameTaken) => fileNameTaken ? console.log('That filename already exists in users repo.') : console.log('Your website has been made'))
  }
  if (!accessToken || !login) {
    authenticateUser().then(() => createSite())
  }
  else {
    console.log('User is already authenticated')
    createSite();
  }
  return (
    <div>
    loading...
    </div>
  )
}

export default LoadingPage;