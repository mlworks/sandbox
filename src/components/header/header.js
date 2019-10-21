import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from 'components/button'
import FlexItem from 'components/flex-item'

// SC
import HeaderSC from './header-sc'

const Header = ({openNavigation}) => (
  <HeaderSC>
    <FlexItem flex="0 0 auto" marginRight="lg">
      <Button onClick={openNavigation}>Open Navigation</Button>
    </FlexItem>
    <FlexItem>
      <h1>Component Demos</h1>
    </FlexItem>
  </HeaderSC>
)

Header.propTypes = {
  openNavigation: PropTypes.func,
}

export default Header
