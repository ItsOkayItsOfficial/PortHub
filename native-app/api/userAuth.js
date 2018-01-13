
import { AuthSession } from 'expo'
import { AsyncStorage } from 'react-native'

const BASE_API = "http://porthubserver.herokuapp.com/api/"
const USER_API = `${BASE_API}/user`
const TEMP_API = `${BASE_API}/templates/`

export default async function PortHubAsyn(login) {
  try {
    let user = await _getUserTemplate(login);
    let templates = JSON.stringify(user[0].template)

    AsyncStorage.setItem('PortHub_Templates', templates);

  } catch (error) {
    console.error(error);
    return null;
  }
}

function _getUserTemplate(user) {
  return fetch(TEMP_API + user, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then( response => response.json());
}