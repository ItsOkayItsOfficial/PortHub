import { RootNav } from './navigation'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading, Asset, Font, ScreenOrientation } from 'expo'
import { Animated, Platform, StatusBar, StyleSheet, View } from 'react-native'

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <RootNav />
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/porthub_logo.png'),
        require('./assets/images/porthub_icon.png'),
        require('./assets/images/cinemagraph.mp4')
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
