import React from 'react'
import PropTypes from 'prop-types'

const TabPane = ({children, id, isActive, labelledBy}) => (
  <div
    role="tabpanel"
    tabIndex="0"
    id={id}
    aria-labelledby={labelledBy}
    hidden={!isActive}
  >
    {children}
  </div>
)

TabPane.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  labelledBy: PropTypes.string,
}

export default TabPane
