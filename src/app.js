import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Accordion from 'pages/accordion'
import Form from 'pages/form'
import Home from 'pages/home'
import ModalPage from 'pages/modal'
import Tabs from 'pages/tabs'

// Components
import AppHeader from 'components/app-header'
import Spacing from 'components/spacing'

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('mousedown', this.setMouseIntent)
    window.addEventListener('keydown', this.removeMouseIntent)
  }

  setMouseIntent = () => document.body.classList.add('mouse-intent')

  removeMouseIntent = event => {
    if (event.keyCode === 9) {
      document.body.classList.remove('mouse-intent')
    }
  }

  render() {
    return (
      <Router>
        <AppHeader />
        <main>
          <Spacing className="app-contents" margin="0 auto" padding="xlg lg">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/accordion">
                <Accordion />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/modal">
                <ModalPage />
              </Route>
              <Route path="/tabs">
                <Tabs />
              </Route>
            </Switch>
          </Spacing>
        </main>
      </Router>
    )
  }
}

export default App
