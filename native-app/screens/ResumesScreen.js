import {DarkBar} from '../components'
import React, {Component} from 'react'
import {View, StyleSheet, AsyncStorage} from 'react-native'
import {Card, Text, Button} from 'react-native-elements'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Resumes'
  };
  constructor(props) {
    super(props)

  this.state = {
    error: null,
    resumes: null,
  }
};

    componentWillMount() {
      AsyncStorage.getItem('PortHub_Templates', (error, result) => {
        let found = [];
        let templates = JSON.parse(result);
        templates.map( item => item.type === 'resume' ? found.push(item) : '')
        found[0] != undefined ? this.setState({resumes: found[0]}) : console.log('No Resumes');
        console.log(`Resumes: ${this.state.resumes}`);
      });
    }

  render() {
    return (
      <View style={styles.container}>

        <DarkBar/>

        <Card title='HELLO WORLD' image={require('../assets/images/porthub_icon.png')}>
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
