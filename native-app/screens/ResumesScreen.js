import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class ResumesScreen extends Component {
  static navigationOptions = {
    title: 'Resumes',
  };

  render() {
    return (
      <ExpoConfigView />
    )
  }
}
