import React, { Component } from 'react';
import './App.css';
import Jumbtron from './components/Jumbotron';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
