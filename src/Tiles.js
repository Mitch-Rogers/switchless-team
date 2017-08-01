import React, { Component } from 'react';
import Tile from './Tile.js';

const apiUrl = " https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7c9469e15a26e98a968eb4a9580f132d&format=json&nojsoncallback=1&api_sig=cfdab2c37609291658b71d52903f3b28"
let json = null

class Tiles extends Component {

  constructor () {
    super()
    this.state = {
      json: null
    }
  }

  componentDidMount() {
    const self = this
    fetch(apiUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function(data) {
      self.setState( {json: data.photos.photo})
      //loadCardData()
    })
  }


  render() {
    console.log(this.state.json)
    if(this.state.json !== null) {
      return (

        <Tile tiles={this.state.json}></Tile>
      )
    }

    return <h1>x</h1>
  }
}

export default Tiles
