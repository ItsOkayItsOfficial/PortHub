import React from 'react'
import axios from 'axios'

export default userAuthAPI = () => {

const BASE_API = 'http://porthubserver.herokuapp.com/api/'
const USER_API = 'http://porthubserver.herokuapp.com/api/user/'

const getUser = (username) => axios.get(USER_API + username).then( response => {console.log(response)}).catch( error => {console.log(error)})
const getPin = () => axios.get(USER_API + this.state.pin)

// getUser = () => axios.get(USER_API + this.state.username)
// .then( response => (
//   (this.state.username === response.data[0].login && this.state.pin === response.data[0].pin) ? Alert.alert('Login Success', '' + response.data[0].login, [{text:'Go', onPress: () => this.setState({userAuth: true})}], { cancelable: false })
//   : Alert.alert('Login Failed', '' + response.data[0].pin) ))
// .catch( error => Alert.alert('Login Failed', '' + error))

}