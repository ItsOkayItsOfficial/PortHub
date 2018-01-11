
import { AuthSession, Constants } from 'expo';
import { AsyncStorage } from 'react-native'
import qs from 'qs';

export const CLIENT_ID = '2c38b12764233cb81da1'
export const CLIENT_SECRET = 'ecb22f511ae02cb5fcfc7ccbbf78e3f5fbf1b7ec'
export const GH_URL = 'https://github.com/login/oauth/authorize?scope=user'


const REDIRECT_URL = AuthSession.getRedirectUrl();
const AUTH_URL =
  'https://github.com/login/oauth/authorize' +
  `?client_id=${CLIENT_ID}` +
  `&scope=user` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

export default async function authenticateWithGithubAsync() {
  try {
    let authResult = await AuthSession.startAsync({
      authUrl: AUTH_URL,
    });

    if (authResult.type !== 'success') {
      return console.log('failed');
    }

    let code = authResult.params.code;

    let result = await _createTokenWithCode(code);
    AsyncStorage.setItem('GitHubToken', result.access_token)

  } catch (error) {
    console.error(error);
    return null;
  }
}

function _createTokenWithCode(code) {
  const url =
    'https://github.com/login/oauth/access_token' +
    `?client_id=${CLIENT_ID}` +
    `&client_secret=${CLIENT_SECRET}` +
    `&code=${code}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then( response => response.json());

}