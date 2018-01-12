
import { AsyncStorage } from 'react-native'

const BASE_API = "http://porthubserver.herokuapp.com/api/"
const USER_API = `${BASE_API}/user`
const TEMP_API = `${BASE_API}/templates/`

export default async function PortHubAsync(login) {

  let user = await _getUserTemplate(login);
  AsyncStorage.setItem('PortHub_Templates', JSON.stringify(user[0].template));

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