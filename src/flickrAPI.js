import React, { Component } from 'react';
import logo from './logo.svg';
import './flickrAPI.css';
import Tiles from './Tiles.js';
import SearchBar from './searchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flickr API</h2>
        </div>
        <Tiles/>
        <SearchBar />
      </div>
    );
  }
}

export default App;
