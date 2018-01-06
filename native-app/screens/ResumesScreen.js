import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import {DarkBar, PDFViewer} from '../components'
import {Card, Text, Button} from 'react-native-elements'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Resumes'
  };

  render() {
    return (
      <View style={styles.container}>

        <DarkBar/>

        <Card title='HELLO WORLD' image={require('../assets/images/porthub_icon.png')}>
          <PDFViwer/>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
