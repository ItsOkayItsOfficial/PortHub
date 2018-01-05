import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { DarkBar } from '../components'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Resumes',
  };

  render() {
    return (
      <View style={styles.container}>
      <DarkBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
