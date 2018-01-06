import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Image,
  Text
} from 'react-native'
import {Icon} from '../components'
import {Colors} from '../constants'
import React, {Component} from 'react'
import {Header} from 'react-native-elements'

export default class DarkBar extends Component {

  render() {
    return (
      <View>

        <Header
          statusBarProps={{barStyle: 'light-content'}}
          leftComponent={<View><Icon style={styles.icon}/></View>}
          outerContainerStyles={{borderBottomColor: Colors.tintColor}}
          />

      </View>
    );

  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30
  }
});