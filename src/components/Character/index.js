import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Name: {this.props.character.name}</p>
          <p>Status: {this.props.character.status}</p>
        </div>
      </div>
    )
  }
}

export default Character