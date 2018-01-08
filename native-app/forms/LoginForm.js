import {Colors} from '../constants'
import {Button} from '../components'
import React, {Component} from 'react'
import {Ionicons} from '@expo/vector-icons'
import axios from 'axios'
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native'

export default class LoginForm extends Component {
  state = {
    error: null,
    username: '',
    pin: ''
  };

_userLogin = (username) => {
    axios.get(`http://porthubserver.herokuapp.com/api/users?login=${this.username}`)
     .then((response) => {
     return axios.post('/user', response.data)
     })
     .then((user) => {
       console.log("logged in user: ", user.data[0].login);
       user.data.length===1 ? this.setState({currentUser:user.data[0]}) : this.setState({currentUser:user.data})
     })
     .catch(error => {
       console.log('Error getting user info: ', error.response)
     })
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
              keyboardType="email-address"
              returnKeyType="next"
              placeholder="Username"
              selectionColor='white'
              keyboardAppearance='dark'
              placeholderTextColor={Colors.tintColor}
              onChangeText={input => this.setState({username})}
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
              />
          </View>

          <Button onPress={this._userLogin} title="LOGIN"/>

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
