import axios from 'axios'
import { TabNav } from '../navigation'
import { GitHubAuth, UserAuth, registerForPushNotificationsAsync } from '../api'
import React, { Component } from 'react'
import { LoginScreen } from '../screens'
import { View, AsyncStorage } from 'react-native'
import { Notifications, Linking, AuthSession } from 'expo'

export default class RootNav extends Component {
  state = {
    error: null,
    isAuthenticated: null,
  };

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }


  render() {
    return (
    <View style={{flex: 1}}>
    {!this.state.isAuthenticated ? (<LoginScreen _handlePressAsync={this._handlePressAsync} />) : (this._renderProfile())}
    </View>
    )
  }

  _renderProfile = () => {
      return (
        <TabNav />
        )
      }


  _registerForPushNotifications() {
    registerForPushNotificationsAsync();
    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
  };

  _handlePressAsync = async () => {
  try {
      let result = await GitHubAuth();
    } catch(error) {
      this.setState({error: JSON.stringify(error)});
    }
  AsyncStorage.getItem('GitHubToken', (error, result) => {
      this.setState({isAuthenticated: result})
      console.log('Authentication: ' + this.state.isAuthenticated);
    });
  };

  }

