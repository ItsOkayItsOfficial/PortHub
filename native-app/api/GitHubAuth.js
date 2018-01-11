
import { AuthSession, Constants } from 'expo';
import qs from 'qs';

export const CLIENT_ID = '2c38b12764233cb81da1'
export const CLIENT_SECRET = 'ecb22f511ae02cb5fcfc7ccbbf78e3f5fbf1b7ec'
export const GH_URL = 'https://github.com/login/oauth/authorize?scope=user'


const REDIRECT_URL = AuthSession.getRedirectUrl();
const AUTH_URL =
  'https://github.com/login/oauth/authorize' +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

export default async function authenticateWithGithubAsync() {
  try {
    let authResult = await AuthSession.startAsync({
      authUrl: AUTH_URL,
    });

    if (authResult.type !== 'success') {
      return 'failed';
    }

    let code = authResult.params.code;

    let result = await _createTokenWithCode(code);
    return result.access_token;
  } catch (e) {
    console.error(e);
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
  }).then(res => res.json());
}