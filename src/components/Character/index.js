import React, { memo } from 'react'

const Character = ({ character }) => {
  return (
    <div className="character--container mt4 mb4 ml3 mr2">
      <article className="mw6 bg-white br3 pa3 pa4-ns ba b--black-10">
        <div className="tc">
          <img src={character.image} className="br-100 h3 w3 dib" alt={character.name} />
          <h1 className="f4">{character.name}</h1>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <div className="tc f6 black-70">
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.status}</p>
        </div>
      </article>
    </div>
  )
}

export default memo(Character);