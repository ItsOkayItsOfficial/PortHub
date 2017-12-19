import React from 'react';
import Keys from '../../keys/keys';
import axios from 'axios';

const LoadingPage = () => {
  let accessToken = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null;
  const authCode = () => {
    const error = window.location.href.match(/[&\?]error=([^&]+)/);
      if (error) {
          throw 'Error getting authorization code: ' + error[1];
      }
    return window.location.href.match(/[&\?]code=([\w\/\-]+)/)[1];
  }
//TO-DO CHECK TO SEE IF ACCESS TOKEN IS STORED LOCALLY BEFORE RE-AUTHENTICATING
  axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id=' 
    + Keys.clientId + '&client_secret=' + Keys.clientSecret + '&code=' + authCode())
    .then((response) => {
      if (response.data.indexOf('error') >= 0) {
        return console.log('an error occurred')
      }
      accessToken = response.data.slice(13, response.data.indexOf('&'))
      localStorage.setItem('accessToken', accessToken);
      return axios.get('https://api.github.com/user?access_token=' + accessToken)
    })
    .then((response) => {
      if (!response) {
        return console.log('an error occurred')
      }
      const userName = response.data.login;
      localStorage.setItem('userName', userName);
      accessToken = localStorage.getItem('accessToken');
      return axios.get(`https://api.github.com/users/${userName}/repos`)
    })
    .then((response) => {
      const userName = localStorage.getItem('userName');
      console.log(response);
      let hasRepo = false;
      if (!response) {
        return console.log('an error occurred')
      }    
      for (let i=0; i< response.data.length; i++) {
        console.log(response.data[i].name);
        if (response.data[i].name === `${userName}.github.io`){
          hasRepo = true;
        }
      }
      return hasRepo;
    })
    .then((response) => {
      const userName = localStorage.getItem('userName');
      return !response ? axios({
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                data:`{"name": "${userName}.github.io", "auto_init":true}`,
                processData: false,
                url: 'https://api.github.com/user/repos?access_token=' + accessToken,
                })
               : 'User has github pages'
    })
    .then((response) => {
      console.log('post to make repo' + response)
      console.log(response)
      const filename = "testbio3.html";
      const filemessage = "uploading a file";
      const filecontent = localStorage.getItem('html');
      const basecontent = btoa(filecontent);
      const filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';
      accessToken = localStorage.getItem('accessToken');
      const userName = localStorage.getItem('userName');
      const url = 'https://api.github.com/repos/' + userName + '/' + userName + '.github.io/contents/' + filename + '?access_token=' + accessToken;
        axios({
          method: 'put',
          contentType: 'application/json',
          data: filedata,
          url: url
        })
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <div>
    loading...
    </div>
  )
}

export default LoadingPage;