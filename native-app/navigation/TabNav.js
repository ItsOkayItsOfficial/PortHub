import React from 'react'
import { Colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { Platform, Button, StyleSheet } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { ProfileScreen, PortfoliosScreen, ResumesScreen } from '../screens'

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
            color={focused ? Colors.mainBlue : Colors.tintColor}
          />
        );
      },
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.mainBlue,
      inactiveBackgroundColor: Colors.darkBlue,
      activeBackgroundColor: Colors.darkBlue,
      style: {
        borderTopColor: Colors.tintColor,
        borderTopWidth: 3,
      },
    },
  }
);
