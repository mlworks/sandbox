import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Form from 'pages/form'
import Home from 'pages/home'
import ModalPage from 'pages/modal'

// Components
import Header from 'components/header'
import Modal from 'components/modal'
import Spacing from 'components/spacing'

const App = () => {
  const [isOpen, toggleModal] = useState(false)
  const dismissModal = () => toggleModal(false)

  return (
    <Router>
      <Header openNavigation={() => toggleModal(!isOpen)} />
      <Modal
        coverage={40}
        effect="slide-left"
        isOpen={isOpen}
        title="Navigation"
        onDismiss={dismissModal}
      >
        <Spacing padding="lg">
          <nav>
            <Spacing marginBottom="lg">
              <Link to="/" onClick={dismissModal}>
                Home
              </Link>
            </Spacing>
            <Spacing marginBottom="lg">
              <Link to="/form" onClick={dismissModal}>
                Form
              </Link>
            </Spacing>
            <Spacing marginBottom="lg">
              <Link to="/modal" onClick={dismissModal}>
                Modal
              </Link>
            </Spacing>
          </nav>
        </Spacing>
      </Modal>

      <Spacing padding="lg">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
        </Switch>
      </Spacing>
    </Router>
  )
}
export default App
