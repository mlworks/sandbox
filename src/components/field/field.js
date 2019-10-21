import React from 'react'

// SC
import FieldSC from './field-sc'
import FieldLabelSC from './field-label-sc'

const Field = ({caption, children, id, label}) => (
  <FieldSC>
    <FieldLabelSC htmlFor={id}>{label}</FieldLabelSC>
    {children}
    {caption && <div>{caption}</div>}
  </FieldSC>
)

export default Field
