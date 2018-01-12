
import { AuthSession, Constants } from 'expo';
import { AsyncStorage } from 'react-native'

const CLIENT_ID = '2c38b12764233cb81da1'
const CLIENT_SECRET = 'ecb22f511ae02cb5fcfc7ccbbf78e3f5fbf1b7ec'

const REDIRECT_URL = AuthSession.getRedirectUrl();
const AUTH_URL =
  'https://github.com/login/oauth/authorize' +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

const CODE_URL =
  'https://github.com/login/oauth/access_token' +
  `?client_id=${CLIENT_ID}` +
  `&client_secret=${CLIENT_SECRET}` +
  `&code=`;

const API_URL =
  'https://api.github.com/user' +
  `?access_token=`;


export default async function GitHubAsync() {
  try {
    let authResult = await AuthSession.startAsync({
      authUrl: AUTH_URL,
    });

    if (authResult.type !== 'success') {
      return console.log('failed');
    }

    let code = authResult.params.code;
    let result = await _createTokenWithCode(code);

    let token = result.access_token;
    AsyncStorage.setItem('GitHub_Token', token);

    let userProfile = await _getUserProfile(token);
    AsyncStorage.setItem('GitHub_User', JSON.stringify(userProfile));

  } catch (error) {
    console.error(error);
    return null;
  }
}

function _createTokenWithCode(code) {
  return fetch(CODE_URL + code, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then( response => response.json());
}

function _getUserProfile(token) {
  return fetch(API_URL + token, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then( response => response.json());
}