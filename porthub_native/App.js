import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Models';

const onLogin = (email, password) => {
  console.log(email, password) // user credentials
}

const onResetPassword = (email) => {
  console.log(email)
}

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome to the PortHub User App!</Text>
        <Login
        onLogin={onLogin}
        onResetPassword={onResetPassword}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
