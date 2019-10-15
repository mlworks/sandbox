import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({defaultValue, maxLength, type, value, onChange, ...props}) => {
  const inputValue = defaultValue || value || ''
  const [count, setCount] = useState(maxLength - inputValue.length)

  useEffect(() => {
    setCount(inputValue.length)
  }, [maxLength, inputValue])

  return (
    <React.Fragment>
      <input
        {...props}
        aria-describedby={maxLength && 'char-limit'}
        defaultValue={defaultValue}
        maxLength={maxLength}
        value={value}
        type={type}
        onChange={event => {
          setCount(event.target.value.length)
          onChange(event.target.value)
        }}
      />
      {maxLength && (
        <span
          id="char-limit"
          aria-label={`${maxLength - count} characters remaining`}
        >
          {count}/{maxLength}
        </span>
      )}
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
