import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import CreateSiteSuccess from './CreateSiteMessage/CreateSiteSuccess';
import CreateSiteError from './CreateSiteMessage/CreateSiteError';
import Aux from '../../../components/Aux/Aux';
import './CreateSiteLoader.css';
import Alert from 'react-s-alert';

const CreateSiteLoader = ({ login, message, selectedTemplate }) => {
  // TO DO--- check for when access token = 'ification_code'
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  let userRepoNum = 0;
  if (!accessToken || !login || !selectedTemplate) {
    return <Redirect to={'/noMatch'} />
  }
  const getUserRepos = () => {
      return axios.get(`https://api.github.com/users/${login}/repos?access_token=` + accessToken)
            .then((response) => {
              console.log(response)
              response.data.length >= 30 ? userRepoNum = 31 : userRepoNum = 0;
              for (let i=0; i< response.data.length; i++) {
                if (response.data[i].name === `${login}.github.io`){
                return Alert.info(`${login} already has a has GitHub pages repository.`, {
                    timeout: 3000,
                    position: 'top',
                    effect: 'bouncyflip',
                    offset: 80
                  })
                }
              }
              Alert.info(`Creating ${login}'s GitHub pages repository..`, {
                timeout: 3000,
                position: 'top',
                effect: 'bouncyflip',
                offset: 80
              })
              return false;
            })
            .catch(error => {
              console.log(error);
              return Alert.error(<CreateSiteError />, {
                timeout: 'none',
                position: 'top',
                effect: 'bouncyflip',
                offset: 80
              })
            })

  }
  const createUserRepo = () => {
    return axios({
      method: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data:`{"name": "${login}.github.io", "auto_init":true}`,
      processData: false,
      url: 'https://api.github.com/user/repos?access_token=' + accessToken,
      })
      .then((response) => {
        return Alert.success(`New GitHub pages repository created for ${login}.`, {
                timeout: 3000,
                position: 'top',
                effect: 'bouncyflip',
                offset: 80
               })
      })
      .catch(error => {
        console.log(error)
        return userRepoNum > 30 ? console.log('User has more than 30 repos') :
              Alert.error(<CreateSiteError />, {
                timeout: 'none',
                position: 'top',
                effect: 'bouncyflip',
                offset: 80
              })
      })
  }

  const createFile = () => {
    const filename = `${login}${Math.floor(Math.random() * 4000)}.html`;
    const filemessage = "uploading a file";
    const filecontent = localStorage.getItem('html');
    const basecontent = btoa(filecontent);
    const filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';
    accessToken = localStorage.getItem('accessToken');
    const url = 'https://api.github.com/repos/' + login + '/' + login + '.github.io/contents/' + filename + '?access_token=' + accessToken;
        return axios({
          method: 'put',
          contentType: 'application/json',
          data: filedata,
          url: url
        })
        .then((response) => {
        return Alert.success(<CreateSiteSuccess login={login} file={filename}/>, {
          timeout: 'none',
          position: 'top',
          effect: 'bouncyflip',
          offset: 80
        })
        })
        .catch((error) => {
          console.log('Create file error: ', error.response)
          return Alert.error(<CreateSiteError login={login} file={filename}/>, {
            timeout: 'none',
            position: 'top',
            effect: 'bouncyflip',
            offset: 80
          })
        })
  }

  const createSite = () => {
    getUserRepos()
    .then((hasRepo) => hasRepo ? console.log('User already has GH pages repo') : createUserRepo())
    .then(() => createFile())
  }


    createSite();

  return (
  <Aux>
    <div className='loadContainer'>
      <div className="ld ld-bounce">
        <img src="https://rawgit.com/ItsOkayItsOfficial/project3/app/assets/images/porthub_icon.png" alt='porthub'className='loadImg'/>
      </div>
    </div>
  </Aux>
  )
}

export default CreateSiteLoader;