import React from 'react';
import Keys from '../../keys/keys';
import axios from 'axios';

const LoadingPage = () => {
  // TO DO--- check for when access token = 'ification_code'
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  let userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : '';
  const generateAuthCode = () => {
    accessToken==='ification_code' ? localStorage.clear() : '';
    return window.location.href.match(/[&\?]code=([\w\/\-]+)/)[1];
  }

  const authenticateUser = () => {
    return axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id=' 
      + Keys.clientId + '&client_secret=' + Keys.clientSecret + '&code=' + generateAuthCode())
      .then((response) => {
        console.log('finished authenticating')
        return response.data.indexOf('error')>=0 ? false :
        accessToken = response.data.slice(13, response.data.indexOf('&'))
        localStorage.setItem('accessToken', accessToken);
      })
  }
  const getUserInfo = () => {
    try {
      return axios.get('https://api.github.com/user?access_token=' + accessToken)
              .then((response) => {
                userName=response.data.login;
                localStorage.setItem('userName', userName);
              })
    }
    catch(error) {
      return console.log(error)
    }
  }

  const getUserRepos = () => {
    try {
      return axios.get(`https://api.github.com/users/${userName}/repos?access_token=` + accessToken)
            .then((response) => {
              for (let i=0; i< response.data.length; i++) {
                if (response.data[i].name === `${userName}.github.io`){
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
        data:`{"name": "${userName}.github.io", "auto_init":true}`,
        processData: false,
        url: 'https://api.github.com/user/repos?access_token=' + accessToken,
        })
        .then((response) => {
          console.log(response)
        })
      }
    catch(error) {
      return console.log(error);
    }
  }

  const createFile = () => {
    const filename = "testbio4.html";
    const filemessage = "uploading a file";
    const filecontent = localStorage.getItem('html');
    const basecontent = btoa(filecontent);
    const filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';
    accessToken = localStorage.getItem('accessToken');
    const userName = localStorage.getItem('userName');
    const url = 'https://api.github.com/repos/' + userName + '/' + userName + '.github.io/contents/' + filename + '?access_token=' + accessToken;
      try {
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
      catch(err) {
        return console.log(err)
      }
  }

  const createSite = () => {
    getUserInfo().then(() => getUserRepos())
    .then((hasRepo) => hasRepo ? console.log('User has Repo') : createUserRepo())
    .then(() => createFile())
    .then((fileNameTaken) => fileNameTaken ? console.log('That filename already exists.') : console.log('Your website has been made'))
  }
  if (!accessToken || !userName) {
    authenticateUser().then(() => createSite())
  }
  else {
    createSite();
  }
  return (
    <div>
    loading...
    </div>
  )
}

export default LoadingPage;