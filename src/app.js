import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Form from './pages/form'
import Home from './pages/home'

// Components
import Spacing from 'components/spacing'

const App = () => (
  <Router>
    <Spacing padding="lg">
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
    </Spacing>

    <Spacing padding="lg">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </Spacing>
  </Router>
)

export default App
