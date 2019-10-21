import React from 'react'

const TabButton = ({isActive, id, label, targetId, onClick}) => (
  <button
    aria-selected={isActive}
    aria-controls={targetId}
    id={id}
    role="tab"
    tabIndex={isActive ? 0 : -1}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
)

export default TabButton
