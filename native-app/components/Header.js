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

export default class AppHeader extends Component {

  render() {
    return (
      <View>

        <Header
          backgroundColor={Colors.darkBlue}
          statusBarProps={{barStyle: 'light-content'}}
          leftComponent={<View><Icon style={styles.icon}/></View>}
          outerContainerStyles={{borderBottomColor: Colors.tintColor}}
          />

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 30
  }
});