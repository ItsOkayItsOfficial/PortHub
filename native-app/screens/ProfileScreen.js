import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  WebView
} from 'react-native';
import {WebBrowser} from 'expo'
import { UserAuth } from '../api'
import {Colors} from '../constants'
import React, {Component} from 'react'
import {Button, Avatar} from 'react-native-elements'
import {Anchor, Logo, Icon, DarkBar} from '../components'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    Title: 'Profile Screen'
  }
  constructor(props) {
    super(props)

  this.state = {
    error: null,
    user: {},
  }
};

  componentWillMount() {
    AsyncStorage.getItem('GitHub_User', (error, result) => {
      this.setState({user: JSON.parse(result)});
      console.log(`User Profile: ${this.state.user.login}`);
      UserAuth(this.state.user.login)
    })
  }


  render() {
    return (
      <View style={styles.container}>

        <DarkBar />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.profileContainer}>

            <Avatar
              xlarge
              rounded
              source={{uri: this.state.user.avatar_url}}
              activeOpacity={0.7}/>

          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>{this.state.user.name} - {this.state.user.location}</Text>
          </View>

          <View style={styles.profileTitle}>
          <Anchor style={styles.profileLink} href={this.state.user.html_url}>{this.state.user.login}</Anchor><Text> | </Text><Anchor style={styles.profileLink} href={this.state.user.blog}>{this.state.user.blog}</Anchor>
          </View>

          <View style={styles.profileContainer}>
           <Text>
             {this.state.user.bio}
            </Text>
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
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  profileTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  profileLink: {
    lineHeight: 24,
    textAlign: 'center'
  },
  button: {
    marginBottom: 0
  }
});
