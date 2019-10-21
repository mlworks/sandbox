import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Form from 'pages/form'
import Home from 'pages/home'
import ModalPage from 'pages/modal'
import Tabs from 'pages/tabs'

// Components
import Header from 'components/header'
import Modal from 'components/modal'
import NavItem from 'components/nav-item'
import Spacing from 'components/spacing'

const isActive = (match, location) => {
  if (!match) {
    return false
  }

  return match.url === location.pathname
}

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
        <nav>
          <NavItem to="/" onClick={dismissModal} isActive={isActive}>
            Home
          </NavItem>
          <NavItem to="/form" onClick={dismissModal} isActive={isActive}>
            Form
          </NavItem>
          <NavItem to="/modal" onClick={dismissModal} isActive={isActive}>
            Modal
          </NavItem>
          <NavItem to="/tabs" onClick={dismissModal} isActive={isActive}>
            Tabs
          </NavItem>
        </nav>
      </Modal>

      <Spacing className="app-contents" margin="0 auto" padding="xlg lg">
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
          <Route path="/tabs">
            <Tabs />
          </Route>
        </Switch>
      </Spacing>
    </Router>
  )
}
export default App
