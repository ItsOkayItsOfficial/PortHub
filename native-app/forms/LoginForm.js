import { Colors } from '../constants'
import { Button } from '../components'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native'

export default class LoginForm extends Component {

  onFocus = () => this.setState({ backgroundColor: 'rgba(42,45,52,1.0)'})
  onBlur = () => this.setState({ backgroundColor: 'rgba(42,45,52,0.5)' })


  render() {
    return (
      <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Ionicons style={styles.inputIcon} name="md-mail" size={25} color={Colors.mainBlue} />
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
          placeholderTextColor={Colors.tintColor}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons style={styles.inputIcon} name="md-lock" size={25} color={Colors.mainBlue} />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor={Colors.tintColor}
          selectionColor= 'white'
          keyboardAppearance= 'dark'
          secureTextEntry
        />
      </View>

          <Button
            onPress={ this.props.onLoginPress }
            title="LOGIN"
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: Colors.tintColor,
    alignItems: 'baseline',
  },
  inputIcon: {
    paddingRight: 10,
    bottom: 0,
},
  input: {
    fontSize: 20,
    flex: 1,
    color: '#fff',
    fontWeight: '700',
    bottom: 0,
  },
});
