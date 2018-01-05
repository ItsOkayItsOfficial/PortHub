import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { Colors } from '../constants'

export default class AppButton extends Component {

render () {
  return (

    <View style={styles.buttonContainer}>

    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
    >
    <Button title={this.props.title} onPress={this.props.onPress} />
    </TouchableOpacity>

   </View>
      );
    }
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      backgroundColor: Colors.darkBlue,
      alignItems: 'center',
      padding: 10,
    }
  });