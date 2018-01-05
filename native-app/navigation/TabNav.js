import React from 'react';
import { Platform, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Colors } from '../constants';
import { ProfileScreen, PortfoliosScreen, ResumesScreen } from '../screens';

export default TabNavigator(
  {
    Profile: { screen: ProfileScreen },
    Portfolios: { screen: PortfoliosScreen },
    Resumes: { screen: ResumesScreen }
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Profile':
            iconName = Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-contact';
            break;
          case 'Portfolios':
            iconName = Platform.OS === 'ios' ? `ios-book${focused ? '' : '-outline'}` : 'md-book';
            break;
          case 'Resumes':
            iconName = Platform.OS === 'ios' ? `ios-copy${focused ? '' : '-outline'}` : 'md-copy';
          }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveBackgroundColor: '#2a2d34',
      activeBackgroundColor: '#2a2d34',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#2a2d34',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
