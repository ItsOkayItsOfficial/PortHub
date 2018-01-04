import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Label, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import { WebBrowser } from 'expo'
import { Video } from 'react-native-video'
import { LoginForm } from '../forms'

export default class LoginScreen extends Component {

  render() {
    return (
      <Video
      resizeMode='cover'
      source={require('../assets/images/cinemagraph.mp4')}
      style={styles.backgroundVideo}
      >
      <KeyboardAvoidingView behavior='padding' style={styles.container}>


        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../assets/images/porthub_logo.png')}
          />
        </View>

        <LoginForm
          onLoginPress={ this.props.onLoginPress }
        />

      </KeyboardAvoidingView>
      </Video>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});