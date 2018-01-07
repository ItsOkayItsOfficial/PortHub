import { Colors } from '../constants'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

export default class AppButton extends Component {

render () {
  return (

    <View style={styles.buttonContainer}>

    <Button
    style={styles.button}
    backgroundColor={Colors.darkBlue}
    color={Colors.tintColor}
    onPress={this.onPress}
    title={this.title}
    fontWeight="700"
    fontFamily="Helvetica"/>

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