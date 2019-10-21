import React from 'react'
import PropTypes from 'prop-types'

// Components
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'

// SC
import HeaderSC from './header-sc'

const Header = ({openNavigation}) => (
  <HeaderSC>
    <FlexItem flex="0 0 auto" marginRight="lg">
      <button type="button" onClick={openNavigation}>
        Open Navigation
      </button>
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
