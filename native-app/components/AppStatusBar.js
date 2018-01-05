import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Platform, Image, Text } from 'react-native'
import { Colors } from '../constants'
import { Icon } from '../components'

const AppStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class DarkBar extends Component {
  render() {

    return (
      <View>
        <AppStatusBar backgroundColor="#08222d" barStyle="light-content" />

        <View style={styles.appBar}>
        <Icon style={styles.icon} />
        </View>

      </View>
    );

  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: Colors.darkBlue,
    height: APPBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: "space-around",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 3,
  },
  icon: {
    width: 30,
  },
});