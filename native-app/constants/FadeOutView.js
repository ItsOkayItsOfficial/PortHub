import React, { Component } from 'react'
import { Animated, Text, View } from 'react-native'

export default class FadeOutView extends Component {
  state = {
    fadeAnim: new Animated.Value(1),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 1500,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (

      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>

    );
  }
}