import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Label, TextInput, Image, KeyboardAvoidingView, StatusBar } from 'react-native'
import { WebBrowser, Video } from 'expo'
import { LoginForm } from '../forms'
import { FadeInView } from '../constants'

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>

      <StatusBar barStyle="dark-content" />
      <FadeInView style={{flex: 1, backgroundColor: '#08222d'}}>

      <Video
      source={require('../assets/images/cinemagraph.mp4')}
      style={styles.backgroundVideo}
      rate={1}
      shouldPlay={true}
      isLooping={true}
      volume={1}
      muted={true}
      resizeMode="cover"
      />

      <KeyboardAvoidingView behavior='padding' style={styles.container}>


        <View style={styles.logoContainer}>
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
      </FadeInView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});