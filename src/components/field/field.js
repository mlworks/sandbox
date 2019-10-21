import React from 'react'
import PropTypes from 'prop-types'

// SC
import FieldSC from './field-sc'
import FieldLabelSC from './field-label-sc'

const Field = ({children, flex, id, label}) => (
  <FieldSC flex={flex}>
    <FieldLabelSC htmlFor={id}>{label}</FieldLabelSC>
    {children}
  </FieldSC>
)

Field.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
}

export default Field
