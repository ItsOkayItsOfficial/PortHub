import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import {DarkBar, PDFViewer} from '../components'
import {Card, Text, Button} from 'react-native-elements'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Resumes'
  };

  render() {
    // const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};

    return (
      <View style={styles.container}>
        <DarkBar/>

        <Card title='HELLO WORLD' image={require('../assets/images/porthub_icon.png')}>
          <PDFViwer source={{uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true}} />
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
