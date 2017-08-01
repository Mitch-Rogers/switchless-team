import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json"

class Tiles extends Component {

  constructor () {
    super()
    this.state = {
      newJson: null
    }
  }

  componentDidMount() {
    this.getJson()
  //  console.log(this.state.newJson, "json")
    console.log("test")

    // fetch(apiUrl)
    //   .then(function (response) {
    //     console.log(response.json())
    //   })
  }


  getJson() {

    // Make a request for a user with a given ID
axios.get(apiUrl)
  .then(function (response) {
    console.log(response, "json response");

  })
  .catch(function (error) {
    console.log(error, "*ERROR*");
  });
    // const request = new XMLHttpRequest()
    //   request.open('GET', apiUrl, true)
    //       request.setRequestHeader('Content-Type', 'json; charset=UTF-8')
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
      <h1></h1>
    )
  }
}

export default Tiles
