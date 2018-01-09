import { TabNav } from '../navigation'
import React, { Component } from 'react'
import { LoginScreen } from '../screens'
import { Notifications, Linking } from 'expo'
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'

export default class RootNav extends Component {
  state = {
    currentUser: null,
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

  onLogoutPres = () => this.setState({ currentUser: null, isLoggedIn: false, isAuthenticated: false, })


  render() {
    if (this.state.isLoggedIn) {
      return ( <TabNav screenProps={ this.onLogoutPress } /> )
    } else {
      return ( <LoginScreen onLoginPress={ this.onLoginPress } /> )
    }
  }

  _registerForPushNotifications() {
    registerForPushNotificationsAsync();
    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
  };

}
