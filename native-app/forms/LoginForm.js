import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet, StatusBar } from 'react-native'

export default class LoginForm extends Component {

  render() {
    return (

      <View style={styles.container}>

        <StatusBar barStyle="light-content" />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          secureTextEntry
        />

        <Button
          style={ styles.buttonContainer }
          onPress={ this.props.onLoginPress }
          title="Login"
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.5)',
    marginBottom: 10,
    padding: 10,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
