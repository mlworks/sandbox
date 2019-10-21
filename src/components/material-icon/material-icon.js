import React from 'react'
import PropTypes from 'prop-types'

const MaterialIcon = ({charCode}) => (
  <i
    className="material-icons"
    dangerouslySetInnerHTML={{__html: `&#x${charCode};`}}
  />
)

MaterialIcon.propTypes = {
  charCode: PropTypes.string,
}

export default MaterialIcon
