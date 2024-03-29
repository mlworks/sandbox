import React from 'react'
import PropTypes from 'prop-types'

// SC
import FieldSC from './field-sc'
import FieldCaptionSC from './field-caption-sc'
import FieldLabelSC from './field-label-sc'

const Field = ({caption, children, flex, id, label}) => (
  <FieldSC flex={flex}>
    <FieldLabelSC htmlFor={id}>{label}</FieldLabelSC>
    {children}
    {caption && <FieldCaptionSC>{caption}</FieldCaptionSC>}
  </FieldSC>
)

Field.propTypes = {
  caption: PropTypes.node,
  children: PropTypes.node,
  flex: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
}

export default Field
