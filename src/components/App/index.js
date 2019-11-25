import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import CharacterList from '../CharacterList'
import Search from '../Search'


class App extends Component {
  render() {
    return (
      <div className="center">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={CharacterList} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
