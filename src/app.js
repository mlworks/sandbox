import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Form from 'pages/form'
import Home from 'pages/home'

// Components
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import Spacing from 'components/spacing'

const App = () => (
  <Router>
    <FlexBox justifyContent="space-around">
      <FlexItem flex="0 0 auto" padding="lg">
        <Link to="/">Home</Link>
      </FlexItem>
      <FlexItem flex="0 0 auto" padding="lg">
        <Link to="/form">Form</Link>
      </FlexItem>
    </FlexBox>

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
