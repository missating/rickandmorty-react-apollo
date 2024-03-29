import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="flex fixed w-100 pa2 justify-between nowrap bg-yellow">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Characters In Rick and Morty</div>
          <Link to="/" className="ml1 no-underline black">
            All Characters
          </Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">
            Search
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)