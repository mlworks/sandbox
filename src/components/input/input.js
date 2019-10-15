import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({defaultValue, maxLength, type, value, onChange, ...props}) => {
  const inputValue = defaultValue || value || ''
  const [count, setCount] = useState(maxLength - inputValue.length)

  useEffect(() => {
    setCount(maxLength - inputValue.length)
  }, [maxLength, inputValue])

  return (
    <React.Fragment>
      <input
        {...props}
        defaultValue={defaultValue}
        maxLength={maxLength}
        value={value}
        type={type}
        onChange={event => {
          setCount(maxLength - event.target.value.length)
          onChange(event.target.value)
        }}
      />
      {maxLength && <span>{count} characters left</span>}
    </React.Fragment>
  )
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
}

export default Input
