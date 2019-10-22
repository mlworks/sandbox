import React, {useState} from 'react'

// Components
import Button from 'components/button'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'
import Modal from 'components/modal'
import NavItem from 'components/nav-item'

// SC
import AppHeaderSC from './app-header-sc'

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
            <MaterialIcon charCode="e5d2" />
          </Button>
        </FlexItem>
        <FlexItem>
          <h1>Component Demos</h1>
        </FlexItem>
      </AppHeaderSC>

      <Modal
        coverage={40}
        effect="slide-left"
        isOpen={isOpen}
        title="Navigation"
        onDismiss={dismissModal}
      >
        <nav>
          <NavItem
            to={`${process.env.PUBLIC_URL}/`}
            onClick={dismissModal}
            isActive={isActive}
          >
            Home
          </NavItem>
          <NavItem
            to={`${process.env.PUBLIC_URL}/accordion`}
            onClick={dismissModal}
            isActive={isActive}
          >
            Accordion
          </NavItem>
          <NavItem
            to={`${process.env.PUBLIC_URL}/form`}
            onClick={dismissModal}
            isActive={isActive}
          >
            Form
          </NavItem>
          <NavItem
            to={`${process.env.PUBLIC_URL}/modal`}
            onClick={dismissModal}
            isActive={isActive}
          >
            Modal
          </NavItem>
          <NavItem
            to={`${process.env.PUBLIC_URL}/tabs`}
            onClick={dismissModal}
            isActive={isActive}
          >
            Tabs
          </NavItem>
        </nav>
      </Modal>
    </React.Fragment>
  )
}

export default AppHeader
