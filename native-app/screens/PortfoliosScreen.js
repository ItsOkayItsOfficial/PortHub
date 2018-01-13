import { DarkBar } from '../components'
import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Portfolios',
  };
  constructor(props) {
    super(props)

  this.state = {
    error: null,
    sites: null,
  }
};

    componentWillMount() {
      AsyncStorage.getItem('PortHub_Templates', (error, result) => {
        let found = [];
        let templates = JSON.parse(result);
        templates.map( item => item.type === "site" ? found.push(item) : '')
        found[0] != undefined ? this.setState({sites: found}) : console.log('No Templates');
        console.log(`Sites: ${this.state.sites.map( site => site.templateName)}`)
      });
    }

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
