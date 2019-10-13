import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Home from './pages/home'

const App = () => (
  <Router>
    <div>app header</div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default App
