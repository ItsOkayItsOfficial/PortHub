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
    userToken: null,
    user: null,
  };

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
    AsyncStorage.getItem('GitHub_Token', (error, result) => {
      !error ? this.setState({userToken: result}) : null;
      console.log('User Token: ' + this.state.userToken);
    });
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }


  render() {
    return (
    <View style={{flex: 1}}>
    {!this.state.user ? (<LoginScreen _handleLoginAsync={this._handleLoginAsync} />) : (this._renderProfile())}
    </View>
    )
  }

  _renderProfile = () => {
      return (
        <TabNav screenProps={this._handleLogout}/>
        )
      }


  _registerForPushNotifications() {
    registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
  };


  _handleLogout = () => {
    AsyncStorage.multiRemove(['GitHub_User', 'GitHub_Token', 'PortHub_Templates'], (error) => {
      this.setState({user: null, userToken: null})
      console.log(`User: ${this.state.currentUser}, Token: ${this.state.userToken}. Logout Complete`);
    })
  };


  _handleLoginAsync = async () => {
    if (!this.state.userToken) {
    try {
      let result = await GitHubAuth();
    } catch(error) {
      this.setState({error: JSON.stringify(error)});
    }
    AsyncStorage.getItem('GitHub_Token', (error, result) => {
      this.setState({userToken: result})
      console.log('New User Token: ' + this.state.userToken);
    })
    }

    AsyncStorage.getItem('GitHub_User', (error, result) => {
      this.setState({user: JSON.parse(result)})
      console.log('User Login: ' + this.state.user.login);

      let userTemplates = UserAuth(this.state.user.login)

    });

  };


}

