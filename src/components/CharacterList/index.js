import React, { Component } from 'react'
import Character from '../Character'

class CharacterList extends Component {
  render() {
    const CharactersToRender = [
      {
        id: '1',
        name: 'Rick',
        status: 'Alive'
      },
      {
        id: '2',
        name: 'Morty',
        status: 'Unknown'
      },
    ]

    return (
      <div>{CharactersToRender.map(character => <Character key={character.id} character={character} />)}</div>
    )
  }
}

export default CharacterList