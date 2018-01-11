import axios from 'axios'
import { TabNav } from '../navigation'
import { GitHubAuth, UserAuth, registerForPushNotificationsAsync } from '../api'
import React, { Component } from 'react'
import { LoginScreen } from '../screens'
import { View, AsyncStorage } from 'react-native'
import { Notifications, Linking, AuthSession } from 'expo'

export default class RootNav extends Component {
  state = {
    result: null,
    error: null,
    githubToken: null,
    currentUser: null,
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
    {!this.state.result ? (<LoginScreen _handlePressAsync={this._handlePressAsync} />) : (this._renderProfile())}
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
      let result = await GitHubAuth();
      this.setState({githubToken: result});
      console.log(GitHubAuth())
      console.log(this.state.githubToken)
  };

  _getUser = (username) => (axios.get(USER_API + username)).then( response => {console.log(response)}).catch( error => {console.log(error)})


  }

