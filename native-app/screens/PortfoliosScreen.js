import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { DarkBar } from '../components'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Portfolios',
  };

  render() {
    return (
      <View style={styles.container}>
      <DarkBar />
      <ScrollView style={styles.scrollContainer}>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
