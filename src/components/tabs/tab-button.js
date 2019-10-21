import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const TabButton = ({id, isActive, label, targetId, onClick}) => {
  const tabButtonEl = useRef(null)

  useEffect(() => {
    if (isActive) {
      tabButtonEl.current.focus()
    }
  }, [isActive])

  return (
    <button
      aria-selected={isActive}
      aria-controls={targetId}
      id={id}
      ref={tabButtonEl}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

TabButton.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  targetId: PropTypes.string,
  onClick: PropTypes.func,
}

export default TabButton
