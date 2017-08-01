import React, { Component } from 'react';

class Tile extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
      {this.props.tiles.map(tile => {
        <h1>{this.props.tiles.title}</h1>
      })
    }
      </div>
    )
  }

}

  export default Tile
