import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

export default class LoginForm extends Component {

  onFocus = () => this.setState({ backgroundColor: 'rgba(42,45,52,1.0)'})
  onBlur = () => this.setState({ backgroundColor: 'rgba(42,45,52,0.5)' })


  render() {
    return (
      <View style={styles.container}>

      <View style={styles.inputContainer}>

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
          selectionColor= 'white'
          keyboardAppearance= 'dark'
          secureTextEntry
        />

        </View>

        <View style={ styles.buttonContainer }>

          <Button
            style={ styles.button }
            onPress={ this.props.onLoginPress }
            title="Login"
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    marginBottom: 85,
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    height: 50,
    borderBottomWidth: 3,
    borderBottomColor: "rgba(250, 250, 250, 0.5)",
    padding: 10,
    margin: 10,
    color: '#fff',
    fontWeight: '700'
  },
  buttonContainer: {
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
  },
});
