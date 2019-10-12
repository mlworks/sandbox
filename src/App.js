import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Home from './pages/home'

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default App
