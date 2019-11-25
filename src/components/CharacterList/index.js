import React, { memo } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Character from '../Character'
import './characterlist.scss'

const FEED_QUERY = gql`
{
  characters(page: 1) {
    info {
      count
    }
    results {
      id,
      image,
      name,
      species,
      gender,
      status
    }
  }
}
`

const CharacterList = () => {
  return (
    <Query query={FEED_QUERY} className="character--list--container">
      {
        ({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const CharactersToRender = data.characters.results

          return (
            <div className="character--list--container__character--section mt5 mb5">
              {CharactersToRender.map(character =>
                <Character
                  key={character.id}
                  character={character}
                />)}
            </div>
          )
        }
      }
    </Query >
  )
}

export default memo(CharacterList);