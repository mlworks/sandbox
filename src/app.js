import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Pages
import Form from 'pages/form'
import Home from 'pages/home'
import ModalPage from 'pages/modal'

// Components
import Modal from 'components/modal'
import Spacing from 'components/spacing'

const App = () => {
  const [isOpen, toggleModal] = useState(false)

  return (
    <Router>
      <button type="button" onClick={() => toggleModal(!isOpen)}>
        Open Navigation
      </button>
      <Modal
        isOpen={isOpen}
        coverage={40}
        effect="slide-left"
        onDismiss={() => toggleModal(!isOpen)}
      >
        <Spacing padding="lg">
          <nav>
            <Spacing marginBottom="lg">
              <Link to="/" onClick={() => toggleModal(false)}>
                Home
              </Link>
            </Spacing>
            <Spacing marginBottom="lg">
              <Link to="/form" onClick={() => toggleModal(false)}>
                Form
              </Link>
            </Spacing>
            <Spacing marginBottom="lg">
              <Link to="/modal" onClick={() => toggleModal(false)}>
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
