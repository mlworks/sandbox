import React from 'react'
import PropTypes from 'prop-types'

// SC
import MaterialIconSC from './material-icon-sc'

const iconMap = {
  add: '&#xe145;',
  arrow_down: '&#xe5c5;',
  chevron_left: '&#xe5cb;',
  chevron_right: '&#xe5cc;',
  close: '&#xe5cd;',
  external_link: '&#xe895;',
  mail: '&#xe0e1;',
  menu: '&#xe5d2;',
  minus: '&#xe15b;',
}

const MaterialIcon = ({icon, ...props}) => (
  <MaterialIconSC
    dangerouslySetInnerHTML={{__html: iconMap[icon]}}
    {...props}
  />
)

MaterialIcon.propTypes = {
  icon: PropTypes.string,
}

export default MaterialIcon
