import React from 'react'
import PropTypes from 'prop-types'

// SC
import MaterialIconSC from './material-icon-sc'

const MaterialIcon = ({charCode}) => (
  <MaterialIconSC dangerouslySetInnerHTML={{__html: `&#x${charCode};`}} />
)

MaterialIcon.propTypes = {
  charCode: PropTypes.string,
}

export default MaterialIcon
