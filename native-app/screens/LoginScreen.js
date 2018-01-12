import {Colors} from '../constants'
import React, { Component } from 'react'
import { WebBrowser, Video } from 'expo'
import { FadeInView } from '../constants'
import {Ionicons} from '@expo/vector-icons'
import { SocialIcon } from 'react-native-elements'
import { StyleSheet, View, Image, KeyboardAvoidingView, StatusBar } from 'react-native'

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

        <View style={styles.loginContainer}>

          <View style={styles.inputContainer}>
            <Ionicons
              style={styles.inputIcon}
              name="logo-github"
              size={125}
              color={Colors.mainBlue}/>
          </View>

          <SocialIcon
            title='Sign In With GitHub'
            button
            type='github'
            onPress={this.props._handleLoginAsync}
          />

          </View>

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
  loginContainer: {
    flex: 1,
    padding: 50
  },
  inputContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIcon: {
    bottom: 0
  },
});