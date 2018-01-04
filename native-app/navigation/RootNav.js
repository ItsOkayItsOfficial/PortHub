import { Notifications } from 'expo'
import React, { Component } from 'react'
import { TabNav } from '../navigation'
import { LoginScreen } from '../screens'
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'

export default class RootNavigator extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  onLoginPress = () => this.setState({ isLoggedIn: true })

  onLogoutPress = () => this.setState({ isLoggedIn: false })


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
