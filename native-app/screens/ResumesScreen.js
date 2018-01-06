import {DarkBar} from '../components'
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
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
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than
            actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Helvetica'
            buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0}}
            title='VIEW NOW'
            />
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
