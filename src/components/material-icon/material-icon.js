import React from 'react'
import PropTypes from 'prop-types'

// SC
import MaterialIconSC from './material-icon-sc'

const iconMap = {
  add: '&#xe145;',
  'arrow-down': '&#xe5c5;',
  close: '&#xe5cd;',
  'external-link': '&#xe895;',
  mail: '&#xe0e1;',
  menu: '&#xe5d2;',
  minus: '&#xe15b;',
}

const MaterialIcon = ({icon}) => (
  <MaterialIconSC dangerouslySetInnerHTML={{__html: iconMap[icon]}} />
)

MaterialIcon.propTypes = {
  icon: PropTypes.string,
}

export default MaterialIcon
