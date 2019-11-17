import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Character from '../Character'

const FEED_QUERY = gql`
{
  characters(page: 1) {
    info {
      count
    }
    results {
      name,
      status
    }
  }
}
`

class CharacterList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const CharactersToRender = data.characters.results

          return (
            <div>
              {CharactersToRender.map(character =>
                <Character
                  key={character.id}
                  character={character}
                />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CharacterList