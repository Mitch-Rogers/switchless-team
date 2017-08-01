import React, { Component } from 'react';
// import axios from 'axios';

const jsonp = require('jsonp');

const apiUrl = " https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7c9469e15a26e98a968eb4a9580f132d&format=json&nojsoncallback=1&api_sig=cfdab2c37609291658b71d52903f3b28"
const jsonFlickrFeed = {}
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
  //   this.getJson()
  // //  console.log(this.state.newJson, "json")
  //   console.log("test")



    fetch(apiUrl).then(function (response) {
      return response.json().then(function(data) {
      console.log(data)
    })
  })



    // fetch(apiUrl)
    //   .then(function (response) {
    //     console.log(response.json())
    //   })
  }





  getJson() {
    // const x = jsonp(apiUrl, {x})
    // console.log(x, "responseee")

//     // Make a request for a user with a given ID
// axios.get(apiUrl, {'Access-Control-Allow-Origin': '*'})
//   .then(function (response) {
//     console.log(response, "json response");
//
//   })
//   .catch(function (error) {
//     console.log(error, "*ERROR*");
//   });
    // const request = new XMLHttpRequest()
    //   request.open('GET', apiUrl, true)
    //       request.setRequestHeader('Access-Control-Allow-Credentials', 'json; charset=UTF-8')
    //         request.send();
    //       //this callback gets called when the server responds to the ajax call
    //       request.onreadystatechange = function(){
    //           if (request.readyState === 4 && request.status === 200){
    //               const returnedJson = JSON.parse(request.responseText)
    //               //this is where you would want to run setState if you need the returned Json for it.
    //               this.setState({newJson: returnedJson})
    //               console.log(returnedJson)
    //           }
    //           else if (request.readyState === 4 && request.status !== 200){
    //               alert('error')
    //           }
    //       };
        }




  render() {

    return (
      <h1>j</h1>
    )
  }
}

export default Tiles
