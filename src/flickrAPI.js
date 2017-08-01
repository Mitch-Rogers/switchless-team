import React, { Component } from 'react';
import logo from './images/full_logo.png';
import './flickrAPI.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="topHeader">Flickr API</h2>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
