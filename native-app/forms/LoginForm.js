import {Colors} from '../constants'
import React, {Component} from 'react'
import {Ionicons} from '@expo/vector-icons'
import { SocialIcon } from 'react-native-elements'
import {View, StyleSheet} from 'react-native'

export default class LoginForm extends Component {
  state = {
    error: null,
    result: null,
    userAuth: false,
  }

    render() {

      return (

        <View style={styles.container}>

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
            onPress={this.props._handlePressAsync}
          />

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
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
  input: {
    fontSize: 20,
    flex: 1,
    color: '#fff',
    fontWeight: '700',
    bottom: 0
  }
});
