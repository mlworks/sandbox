import React from 'react'

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

export default TabPane
