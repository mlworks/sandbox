import React, {useState} from 'react'

// Components
import Button from 'components/button'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'
import Modal from 'components/modal'
import NavItem from 'components/nav-item'

// SC
import AppHeaderSC from './app-header-sc'

// Routes
import routes from 'constants/route-definitions'

const isActive = (match, location) => {
  if (!match) {
    return false
  }

  return match.url === location.pathname
}

const AppHeader = () => {
  const [isOpen, toggleModal] = useState(false)
  const dismissModal = () => toggleModal(false)

  return (
    <React.Fragment>
      <AppHeaderSC>
        <FlexItem flex="0 0 auto" marginRight="md">
          <Button
            onClick={() => toggleModal(true)}
            title="Open Navigation"
            aria-label="Open Navigation"
          >
            <MaterialIcon icon="menu" />
          </Button>
        </FlexItem>
        <FlexItem>
          <h1>Component Demos</h1>
        </FlexItem>
      </AppHeaderSC>

      <Modal
        effect="slide-left"
        isOpen={isOpen}
        maxWidth="320px"
        title="Navigation"
        onDismiss={dismissModal}
      >
        <nav>
          {routes.map(({name, path}) => (
            <NavItem
              key={path}
              to={path}
              onClick={dismissModal}
              isActive={isActive}
            >
              {name}
            </NavItem>
          ))}
        </nav>
      </Modal>
    </React.Fragment>
  )
}

export default AppHeader
