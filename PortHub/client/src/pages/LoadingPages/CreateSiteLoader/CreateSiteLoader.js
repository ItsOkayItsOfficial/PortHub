import React from 'react';
import axios from 'axios';
import CreateSiteSuccess from './CreateSiteMessage/CreateSiteSuccess';
import CreateSiteError from './CreateSiteMessage/CreateSiteError';
import Modal from '../../../components/Modal/Modal';
import Aux from '../../../HOCs/Aux';
import './CreateSiteLoader.css';
import Alert from 'react-s-alert';

const CreateSiteLoader = ({ login, message }) => {
  // TO DO--- check for when access token = 'ification_code'
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  const getUserRepos = () => {
      return axios.get(`https://api.github.com/users/${login}/repos?access_token=` + accessToken)
            .then((response) => {
              console.log(response)
              for (let i=0; i< response.data.length; i++) {
                if (response.data[i].name === `${login}.github.io`){
                Alert.info(`${login} already has a has GitHub pages repository.`, {
                    timeout: 'none',
                    position: 'top',
                    offset: 80
                  })
                  return true
                }
              }
              return false;
            })
            .catch(error => {
              console.log('Get user repos error: ', error.response)
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
                timeout: 'none',
                position: 'top',
                offset: 80
               })
      })
      .catch(error => {
        console.log('Create repo error:', error.response)
      })
  }

  const createFile = () => {
    const filename = "testbio35.html";
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
        Alert.success(<CreateSiteSuccess login={login} file={filename}/>, {
          timeout: 'none',
          position: 'top',
          offset: 80
        })
        })
        .catch((error) => {
          console.log('Create file error: ', error.response)
          Alert.error(<CreateSiteSuccess login={login} file={filename}/>, {
            timeout: 'none',
            position: 'top',
            offset: 80
          })
          return true;
        })
  }

  const createSite = () => {
    getUserRepos()
    .then((hasRepo) => hasRepo ? console.log('User already has GH pages repo') : createUserRepo())
    .then(() => createFile())
    .then((fileNameTaken) =>  fileNameTaken ? console.log('That filename already exists in users repo.')
    : console.log('Your website has been made'))
  }

  if (accessToken && login) {
    createSite();
  }
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