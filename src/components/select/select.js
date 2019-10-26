import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

// Components
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// SC
import SelectSC from './select-sc'
import SelectFauxSC from './select-faux-sc'
import SelectWrapperSC from './select-wrapper-sc'

const Select = ({placeholder, options, value, onChange, ...props}) => {
  const [selectedValue, setValue] = useState(value)
  const selectedOption =
    options.find(option => option.value === selectedValue) || {}

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <SelectWrapperSC>
      <SelectSC
        {...props}
        value={selectedValue}
        onChange={event => {
          setValue(event.target.value)
          onChange(event)
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectSC>
      <SelectFauxSC>
        <FlexItem>{selectedOption.label || placeholder}</FlexItem>
        <FlexItem flex="0 0 auto">
          <MaterialIcon icon="arrow_down" />
        </FlexItem>
      </SelectFauxSC>
    </SelectWrapperSC>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  placeholder: 'Select an option',
  value: '',
  onChange: () => {},
}

export default Select
