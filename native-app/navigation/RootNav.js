import { Notifications } from 'expo'
import React, { Component } from 'react'
import axios from 'axios'
import { TabNav } from '../navigation'
import { LoginScreen } from '../screens'

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'

export default class RootNavigator extends Component {
  state = {
    currentUser: {},
    isLoggedIn: false,
    isAuthenticated: false,
  };

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  onLoginPress = () => this.setState({ isLoggedIn: true })

  onLogoutPress = () => this.setState({ currentUser: {}, isLoggedIn: false, isAuthenticated: false })

  redirectToGitHubHandler = () => {
    console.log("clientid:", Keys.clientId);
    window.location.replace('https://github.com/login/oauth/authorize?client_id='+
    Keys.clientId + '&redirect_uri=https://realporthub.herokuapp.com/authLoader&state=1234&scope=user,public_repo');
  }

  getUserInfoHandler = (token) => {
   axios.get('https://api.github.com/user?access_token=' + token)
    .then((response) => {
    return axios.post('/user', response.data)
    })
    .then((user) => {
      console.log("logged in user: ", user.data[0].login);
      user.data.length===1 ? this.setState({currentUser:user.data[0]}) : this.setState({currentUser:user.data})
    })
    .catch(error => {
      console.log('Error getting user info: ', error.response)
    })
  }


  render() {
    if (this.state.isLoggedIn)
      return <TabNav
          screenProps={ this.onLogoutPress }
        />;
    else
      return <LoginScreen
          onLoginPress={ this.onLoginPress }
        />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
