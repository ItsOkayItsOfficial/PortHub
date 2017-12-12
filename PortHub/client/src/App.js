import React, { Component } from 'react';
import './App.css';
import Jumbtron from './components/Jumbotron';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbtron>
          <img src='/assets/images/porthub_logo.png' alt="logo" />          
        </Jumbtron>
        <LandingPage />

      </div>
    );
  }
}

export default App;
