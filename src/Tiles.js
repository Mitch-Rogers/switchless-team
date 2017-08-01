import React, { Component } from 'react';

const apiUrl = " https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7c9469e15a26e98a968eb4a9580f132d&format=json&nojsoncallback=1&api_sig=cfdab2c37609291658b71d52903f3b28"

class Tiles extends Component {

  constructor () {
    super()
    this.state = {
      newJson: null,
      jsonFlickFeed: {}
    }
  }

  _jp0() {
    return (
      <h2>hello</h2>
    )
  }

  componentDidMount() {

    fetch(apiUrl).then(function (response) {
      return response.json().then(function(data) {
      console.log(data)
    })
  })
}

  render() {

    return (
      <h1>j</h1>
    )
  }
}


export default Tiles
