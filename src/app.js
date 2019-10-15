import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Form from './pages/form'
import Home from './pages/home'

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </Switch>
  </Router>
)

export default App
