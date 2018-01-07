import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {WebBrowser} from 'expo'
import {Colors} from '../constants'
import React, {Component} from 'react'
import {Button, Avatar} from 'react-native-elements'
import {Anchor, Logo, Icon, DarkBar} from '../components'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    Title: 'Profile Screen'
  }

  render() {
    return (
      <View style={styles.container}>

        <DarkBar />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>

            <Avatar
              xlarge
              rounded
              source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
            }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}/>

          </View>

          <View style={styles.getStartedContainer}>
            <Anchor style={styles.getStartedText} href="mailto: ''">Email</Anchor>
          </View>

        </ScrollView>

        <Button
        style={styles.button}
        backgroundColor={Colors.darkBlue}
        color={Colors.tintColor}
        onPress={this.props.screenProps}
        title="LOG OUT"
        fontWeight="700"
        fontFamily="Helvetica"/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    marginBottom: 0
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeText: {
    width: 300,
    height: 80,
    marginTop: 3,
    marginLeft: -10
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  button: {
    marginBottom: 0
  }
});
