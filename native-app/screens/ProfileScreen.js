import React, { Component } from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebBrowser } from 'expo'
import { MonoText } from '../components/StyledText'
import { Anchor, DarkBar, Logo } from '../components'
import { Colors } from '../constants'
import { Button } from 'react-native-elements'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    Title: 'ProfileScreen',
  };

  render() {
    return (
      <View style={styles.container}>

      <DarkBar />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Logo style={styles.welcomeImage} />
          </View>

          <View style={ styles.getStartedContainer}>
            <Anchor style={ styles.getStartedText } href="mailto: ''">Email</Anchor>
          </View>

          <Button
            backgroundColor={Colors.darkBlue}
            color={Colors.tintColor}
            onPress={ this.props.onLoginPress }
            title="LOG OUT"
            fontWeight="700"
            fontFamily="Helvetica"
          />

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 0,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 80,
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
