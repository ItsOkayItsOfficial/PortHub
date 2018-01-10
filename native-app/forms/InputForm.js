import axios from 'axios'
import {Colors} from '../constants'
import {Button} from '../components'
import React, {Component} from 'react'
import {Ionicons} from '@expo/vector-icons'
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native'

export default class InputForm extends Component {
  state = {
    error: null,
    result: null,
    username: '',
    pin: '',
    userAuth: false,
  }

    render() {

      return (

        <View style={styles.container}>

          <View style={styles.inputContainer}>
            <Ionicons
              style={styles.inputIcon}
              name="md-mail"
              size={20}
              color={Colors.mainBlue}/>

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onSubmitEditing={() => this.passwordInput.focus()}
              refs={input => (this.state.password= input)}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Username"
              selectionColor='white'
              keyboardAppearance='dark'
              placeholderTextColor={Colors.tintColor}
              onChangeText={(text) => this.setState({ username:text })}
              />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              style={styles.inputIcon}
              name="md-lock"
              size={20}
              color={Colors.mainBlue}/>

            <TextInput
              style={styles.input}
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              placeholder="PIN"
              placeholderTextColor={Colors.tintColor}
              selectionColor='white'
              keyboardAppearance='dark'
              secureTextEntry
              onChangeText={(text) => this.setState({ pin:text })}
              />
          </View>

          <Button title="Login" onPress={this.props.onLoginPress} />

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
    marginBottom: 30,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: Colors.tintColor,
    alignItems: 'baseline'
  },
  inputIcon: {
    paddingRight: 10,
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
