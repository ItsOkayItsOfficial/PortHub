import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet, StatusBar } from 'react-native'

export default class LoginForm extends Component {

  onFocus = () => this.setState({ backgroundColor: 'rgba(42,45,52,1.0)'})
  onBlur = () => this.setState({ backgroundColor: 'rgba(42,45,52,0.5)' })


  render() {
    return (

      <View style={styles.container}>

        <StatusBar barStyle="light-content" />

        <TextInput
          style={ styles.input }
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          selectionColor= 'white'
          keyboardAppearance= 'dark'
          placeholderTextColor="rgba(250, 250, 250, 0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="rgba(250, 250, 250, 0.7)"
          onFocus= { () => this.onFocus() }
          onBlur= { () => this.onBlur() }
          selectionColor= 'white'
          keyboardAppearance= 'dark'

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
    marginBottom: 10,
    backgroundColor: 'rgba(42,45,52,.5)',
    padding: 10,
    color: '#fff',
    fontWeight: '700'
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
