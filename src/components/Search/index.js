import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Character from '../Character'

class Search extends Component {

  state = {
    characters: [],
    filter: ''
  }

  render() {
    return (
      <>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.characters.map((character, index) => (
          <Character key={character.id} character={character} index={index} />
        ))}
      </>
    )
  }

  _executeSearch = async () => {
    // ... you'll implement this 🔜
  }
}

export default withApollo(Search)