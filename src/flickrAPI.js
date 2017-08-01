import React, { Component } from 'react';
import logo from './logo.svg';
import './flickrAPI.css';
const createReactClass = require('create-react-class')

const App = createReactClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flickr API</h2>
        </div>
        <search />
      </div>
    );
  }
})

const search = createReactClass({
  // search: function() {
  //
  // }

  render() {
    return (
      <div>
        <div id="searchDiv">
          <input type="text" value="Search" id="searchBar" />
        </div>
      </div>
    )
  }
})

const feed = createReactClass({


  render() {
    return (
      <div></div>
    )
  }
})

export default App;
